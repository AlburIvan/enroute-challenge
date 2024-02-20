import  { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const codeData = [
  {
    name: 'Black',
    code: 'BK',
    multiplier: 0,
    tolerance: 20,
  },
  {
    name: 'Brown',
    code: 'BN',
    multiplier: 1,
    tolerance: 1,
  },
  {
    name: 'Red',
    code: 'RD',
    multiplier: 2,
    tolerance: 2,
  },
  {
    name: 'Orange',
    code: 'OG',
    multiplier: 3,
    tolerance: 0.05,
  },
  {
    name: 'Yellow',
    code: 'YL',
    multiplier: 4,
    tolerance: 0.02,
  },
  {
    name: 'Green',
    code: 'GN',
    multiplier: 5,
    tolerance: 0.5,
  },
  {
    name: 'Blue',
    code: 'BL',
    multiplier: 6,
    tolerance: 0.25,
  },
  {
    name: 'Violet',
    code: 'VT',
    multiplier: 7,
    tolerance: 0.1,
  },
  {
    name: 'Gray',
    code: 'GY',
    multiplier: 8,
    tolerance: 0.01,
  },
  {
    name: 'White',
    code: 'WT',
    multiplier: 9,
    tolerance: 0,
  },
  {
    name: 'Gold',
    code: 'GD',
    multiplier: -1,
    tolerance: 5,
  },
  {
    name: 'Silver',
    code: 'SV',
    multiplier: -2,
    tolerance: 10,
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const data of codeData) {
    const code = await prisma.code.create({
      data: data,
    });

    console.log(`Created code [${code.name}] with id: ${code.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
