-- CreateTable
CREATE TABLE "junta_directiva" (
    "j_id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "urlfoto" TEXT,

    CONSTRAINT "junta_directiva_pkey" PRIMARY KEY ("j_id")
);

-- CreateTable
CREATE TABLE "estudiantes" (
    "e_id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "seccion" TEXT,
    "urlfoto" TEXT,
    "singer4Id" INTEGER,

    CONSTRAINT "estudiantes_pkey" PRIMARY KEY ("e_id")
);

-- CreateTable
CREATE TABLE "formulario" (
    "f_id" SERIAL NOT NULL,
    "pregunta" TEXT,
    "released" BOOLEAN NOT NULL DEFAULT false,
    "singerId" INTEGER,
    "singer2Id" INTEGER,
    "singer3Id" INTEGER,

    CONSTRAINT "formulario_pkey" PRIMARY KEY ("f_id")
);

-- CreateTable
CREATE TABLE "respuestas" (
    "r_id" SERIAL NOT NULL,
    "respuesta" TEXT,

    CONSTRAINT "respuestas_pkey" PRIMARY KEY ("r_id")
);

-- CreateTable
CREATE TABLE "cursos" (
    "c_id" SERIAL NOT NULL,
    "codigo" TEXT,
    "name" TEXT,
    "singer5Id" INTEGER,

    CONSTRAINT "cursos_pkey" PRIMARY KEY ("c_id")
);

-- CreateTable
CREATE TABLE "profesores" (
    "p_id" SERIAL NOT NULL,
    "name" TEXT,
    "urlfoto" TEXT,

    CONSTRAINT "profesores_pkey" PRIMARY KEY ("p_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "junta_directiva_email_key" ON "junta_directiva"("email");

-- CreateIndex
CREATE UNIQUE INDEX "estudiantes_email_key" ON "estudiantes"("email");

-- AddForeignKey
ALTER TABLE "estudiantes" ADD CONSTRAINT "estudiantes_singer4Id_fkey" FOREIGN KEY ("singer4Id") REFERENCES "cursos"("c_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "formulario" ADD CONSTRAINT "formulario_singerId_fkey" FOREIGN KEY ("singerId") REFERENCES "junta_directiva"("j_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "formulario" ADD CONSTRAINT "formulario_singer2Id_fkey" FOREIGN KEY ("singer2Id") REFERENCES "respuestas"("r_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "formulario" ADD CONSTRAINT "formulario_singer3Id_fkey" FOREIGN KEY ("singer3Id") REFERENCES "estudiantes"("e_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cursos" ADD CONSTRAINT "cursos_singer5Id_fkey" FOREIGN KEY ("singer5Id") REFERENCES "profesores"("p_id") ON DELETE SET NULL ON UPDATE CASCADE;
