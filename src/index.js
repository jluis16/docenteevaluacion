// #1
import { PrismaClient } from "@prisma/client";
import express from "express"
import cors from "cors"

//#2
const prisma = new PrismaClient();
//#3
//const cors = requiere("cors");
const app = express();
//#4
app.use(express.json());
app.use(cors());

//CRUD JUNTA DIRECTIVA

//GET
app.get("/junta_directiva", async (req, res) => {
    const juntanew = await prisma.junta_directiva.findMany();
    res.json({
      success: true,
      payload: juntanew,
      message: "Operation Successful",
  });
});

//POST
app.post("/crear_junta_directiva", async (req, res) => {
    const result = await prisma.junta_directiva.create({
        data: req.body,
      });
      res.json(result);
    });
    
    
//DELETE
app.delete("/junta_directiva/:id", async (req, res) => {
    const { id } = req.params;
    const nombres = await prisma.junta_directiva.delete({
    where: {
        j_id: Number(id),
    },
    });
    res.json(`El miembro de la junta directiva con el id ${id} fue eliminado exitosamente`);
});
    
//PUT
app.put("/junta_directiva/:id", async (req, res) => {
    const { id } = req.params;
    try {
    const actualizacion = await prisma.junta_directiva.update({
        where: { j_id: Number(id) },
          // req.body es la info que manda el usuario para actualizar
        data: req.body,
    });
    res.json({
        datos: actualizacion,
        mensaje: `El miembro de la junta directiva con el id ${id} fue actulizado exitosamente`,
    });
    } catch (e) {
    res.json({ error: `El miembro de la junta directiva con el id ${id} no existe` });
    }
});




    



app.use((req, res, next) => {
    res.status(404);
    return res.json({
      success: false,
      payload: null,
      message: `API SAYS: Endpoint not found for path: ${req.path}`,
  });
});
  
  app.listen(process.env.PORT || 8000, () =>
    console.log(`🚀 Example app listening on port 8000`)
);




