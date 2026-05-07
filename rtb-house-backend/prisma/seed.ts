import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { Pool } from 'pg';

type SellerInput = {
  id: number;
  name: string;
};

type OrderInput = {
  orderId: number;
  product: string;
  seller: number;
  country: string;
  price: number;
};

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const frontendDataDir = path.resolve(process.cwd(), '../rtb-house-frontend/src/utils/data');
const sellersPath = path.join(frontendDataDir, 'sellers.json');
const ordersPath = path.join(frontendDataDir, 'orders.json');

async function loadJson<T>(filePath: string): Promise<T> {
  const content = await readFile(filePath, 'utf-8');
  return JSON.parse(content) as T;
}

async function main() {
  const sellers = await loadJson<SellerInput[]>(sellersPath);
  const orders = await loadJson<OrderInput[]>(ordersPath);

  await prisma.order.deleteMany();
  await prisma.seller.deleteMany();

  await prisma.seller.createMany({
    data: sellers.map((seller) => ({
      id: seller.id,
      name: seller.name,
    })),
  });

  await prisma.order.createMany({
    data: orders.map((order) => ({
      orderId: order.orderId,
      product: order.product,
      sellerId: order.seller,
      country: order.country,
      price: order.price,
    })),
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
