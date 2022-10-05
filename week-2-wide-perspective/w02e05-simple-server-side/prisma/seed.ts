import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const clientData: Prisma.ClientCreateInput[] = [
  {
    name: "Andy",
    email: "andy@prisma.io",
    password: "Password123",
  },
  {
    name: "Dereck",
    email: "dereck@prisma.io",
    password: "Password123",
  },
  {
    name: "Nathan",
    email: "nathan@prisma.io",
    password: "Password123",
  },
];

const productData: Prisma.ProductCreateInput[] = [
  {
    name: "Macbook Pro '14",
    price: 12000,
  },
  {
    name: "iPhone 13 Pro",
    price: 5200,
  },
  {
    name: "iPad Pro",
    price: 4000,
  },
  {
    name: "Apple Watch Series 7",
    price: 3000,
  },
];

const orderData: Prisma.OrderCreateInput[] = [
  {
    client: {
      connect: {
        id: 1,
      },
    },
    products: {
      create: [
        {
          price: 12000,
          product: {
            connect: {
              id: 3,
            },
          },
        },
      ],
    },
    invoice: {
      create: {
        year: new Date().getFullYear(),
        number: 1,
        client: {
          connect: {
            id: 1,
          },
        },
      },
    },
  },
];

const load = async () => {
  try {
    await prisma.client.deleteMany();
    console.log(`Deleted all clients`);

    await prisma.product.deleteMany();
    console.log(`Deleted all products`);

    await prisma.order.deleteMany();
    console.log(`Deleted all orders`);

    await prisma.orderOfProducts.deleteMany();
    console.log(`Deleted all orderOfProducts`);

    await prisma.invoice.deleteMany();
    console.log(`Deleted all invoices`);

    console.log(`Start seeding ...`);

    for (const data of clientData) {
      const client = await prisma.client.create({
        data,
      });
      console.log(`Created client with id: ${client.id}`);
    }

    for (const data of productData) {
      const product = await prisma.product.create({
        data,
      });
      console.log(`Created product with id: ${product.id}`);
    }

    for (const data of orderData) {
      const order = await prisma.order.create({
        data,
      });
      console.log(`Created order with id: ${order.id}`);
    }

    console.log(`Seeding finished.`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
