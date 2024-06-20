// ./services/prisma.js

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/**
On peut ajouter des options si on le souhaite !

const opt = {
  errorFormat: "pretty",
  log: ["query", "warn", "error"],
}

const prisma = new PrismaClient(opt);

*/
export { prisma };
