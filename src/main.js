import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const juntanueva = await prisma.junta_directiva.create({
    data: {
      name: "Juanito Perez",
      email: "juanito.p@gmail.com",
      password: "password1",
      urlfoto: "https://randomuser.me/api/portraits/men/69.jpg",

    },
  });
  console.log("Nuevo miembro de la junta directiva creado: ", juntanueva);
  const todasjuntas = await prisma.junta_directiva.findMany();
  console.log("Todos los todos miembros son: ");
  console.dir(todasjuntas, { depth: null });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });