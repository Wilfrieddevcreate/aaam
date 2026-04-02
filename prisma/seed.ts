import { PrismaClient } from "@prisma/client";
import bcryptjs from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const existing = await prisma.user.findUnique({
    where: { email: "admin@aaam.org" },
  });

  if (!existing) {
    await prisma.user.create({
      data: {
        name: "Admin AAAM",
        email: "admin@aaam.org",
        password: bcryptjs.hashSync("Admin@2024", 10),
        role: "admin",
      },
    });
    console.log("Admin user created: admin@aaam.org / Admin@2024");
  } else {
    console.log("Admin user already exists.");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
