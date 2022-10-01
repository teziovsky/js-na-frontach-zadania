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
];

const orderData: Prisma.OrderCreateInput[] = [
  {
    client: {
      connect: {
        id: 1,
      },
    },
  },
];

const orderOfProductsData: Prisma.OrderOfProductsCreateInput[] = [
  {
    price: 11000,
    product: {
      connect: {
        id: 1,
      },
    },
    order: {
      connect: {
        id: 1,
      },
    },
  },
];

const invoiceData: Prisma.InvoiceCreateInput[] = [
  {
    number: "2022/01",
    order: {
      connect: {
        id: 1,
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

    for (const data of orderOfProductsData) {
      const orderOfProducts = await prisma.orderOfProducts.create({
        data,
      });
      console.log(`Created orderOfProducts with id: ${orderOfProducts.id}`);
    }

    for (const data of invoiceData) {
      const invoice = await prisma.invoice.create({
        data,
      });
      console.log(`Created invoice with id: ${invoice.id}`);
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
