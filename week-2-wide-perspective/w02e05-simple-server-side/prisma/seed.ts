import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const clientData: Prisma.ClientCreateInput[] = [
  {
    email: "andy@prisma.io",
    name: "Andy",
  },
  {
    email: "dereck@prisma.io",
    name: "Dereck",
  },
  {
    email: "nathan@prisma.io",
    name: "Nathan",
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
    products: {
      connect: {
        id: 1,
      },
    },
  },
];

const invoiceData: Prisma.InvoiceCreateInput[] = [
  {
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

    await prisma.invoice.deleteMany();
    console.log(`Deleted all invoices`);

    console.log(`Start seeding ...`);

    for (const u of clientData) {
      const client = await prisma.client.create({
        data: u,
      });
      console.log(`Created client with id: ${client.id}`);
    }

    for (const u of productData) {
      const product = await prisma.product.create({
        data: u,
      });
      console.log(`Created product with id: ${product.id}`);
    }

    for (const u of orderData) {
      const order = await prisma.order.create({
        data: u,
      });
      console.log(`Created order with id: ${order.id}`);
    }

    for (const u of invoiceData) {
      const invoice = await prisma.invoice.create({
        data: u,
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
