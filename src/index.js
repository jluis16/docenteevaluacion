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
    const nombres1 = await prisma.junta_directiva.delete({
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
        mensaje: `El miembro de la junta directiva con el id ${id} fue actualizado exitosamente`,
    });
    } catch (e) {
    res.json({ error: `El miembro de la junta directiva con el id ${id} no existe` });
    }
});

//CRUD ESTUDIANTES

//GET
app.get("/estudiantes", async (req, res) => {
    const estudiantesnew = await prisma.estudiantes.findMany();
    res.json({
      success: true,
      payload: estudiantesnew,
      message: "Operation Successful",
  });
});

//POST
app.post("/crear_estudiantes", async (req, res) => {
    const result = await prisma.estudiantes.create({
        data: req.body,
      });
      res.json(result);
    });
    
    
//DELETE
app.delete("/estudiantes/:id", async (req, res) => {
    const { id } = req.params;
    const nombres2 = await prisma.estudiantes.delete({
    where: {
        e_id: Number(id),
    },
    });
    res.json(`El estudiantes con el id ${id} fue eliminado exitosamente`);
});
    
//PUT
app.put("/estudiantes/:id", async (req, res) => {
    const { id } = req.params;
    try {
    const actualizaciones = await prisma.estudiantes.update({
        where: { e_id: Number(id) },
          // req.body es la info que manda el usuario para actualizar
        data: req.body,
    });
    res.json({
        datos: actualizaciones,
        mensaje: `El estudiante con el id ${id} fue actualizado exitosamente`,
    });
    } catch (e) {
    res.json({ error: `El estudiante con el id ${id} no existe` });
    }
});


//CRUD FORMULARIO

//GET
app.get("/formulario", async (req, res) => {
    const formularionew = await prisma.formulario.findMany();
    res.json({
      success: true,
      payload: formularionew,
      message: "Operation Successful",
  });
});

//POST
app.post("/crear_formulario", async (req, res) => {
    const result = await prisma.formulario.create({
        data: req.body,
      });
      res.json(result);
    });
    
    
//DELETE
app.delete("/formulario/:id", async (req, res) => {
    const { id } = req.params;
    const nombres3 = await prisma.formulario.delete({
    where: {
        f_id: Number(id),
    },
    });
    res.json(`El formulario con el id ${id} fue eliminado exitosamente`);
});
    
//PUT
app.put("/formulario/:id", async (req, res) => {
    const { id } = req.params;
    try {
    const actualizacionesf = await prisma.formulario.update({
        where: { f_id: Number(id) },
          // req.body es la info que manda el usuario para actualizar
        data: req.body,
    });
    res.json({
        datos: actualizacionesf,
        mensaje: `El fomrulario con el id ${id} fue actualizado exitosamente`,
    });
    } catch (e) {
    res.json({ error: `El formulario con el id ${id} no existe` });
    }
});

//CRUD RESPUESTAS

//GET
app.get("/respuestas", async (req, res) => {
    const respuestasnew = await prisma.respuestas.findMany();
    res.json({
      success: true,
      payload: respuestasnew,
      message: "Operation Successful",
  });
});

//POST
app.post("/crear_respuestas", async (req, res) => {
    const result = await prisma.respuestas.create({
        data: req.body,
      });
      res.json(result);
    });
    
    
//DELETE
app.delete("/respuestas/:id", async (req, res) => {
    const { id } = req.params;
    const nombres4 = await prisma.respuestas.delete({
    where: {
        r_id: Number(id),
    },
    });
    res.json(`La respuesta con el id ${id} fue eliminado exitosamente`);
});
    
//PUT
app.put("/respuestas/:id", async (req, res) => {
    const { id } = req.params;
    try {
    const actualizacionesr = await prisma.respuestas.update({
        where: { r_id: Number(id) },
          // req.body es la info que manda el usuario para actualizar
        data: req.body,
    });
    res.json({
        datos: actualizacionesr,
        mensaje: `La respuesta con el id ${id} fue actualizado exitosamente`,
    });
    } catch (e) {
    res.json({ error: `La respuesta con el id ${id} no existe` });
    }
});    

//CRUD CURSOS

//GET
app.get("/cursos", async (req, res) => {
    const cursosnew = await prisma.cursos.findMany();
    res.json({
      success: true,
      payload: cursosnew,
      message: "Operation Successful",
  });
});

//POST
app.post("/crear_cursos", async (req, res) => {
    const result = await prisma.cursos.create({
        data: req.body,
      });
      res.json(result);
    });
    
    
//DELETE
app.delete("/cursos/:id", async (req, res) => {
    const { id } = req.params;
    const nombres5 = await prisma.cursos.delete({
    where: {
        c_id: Number(id),
    },
    });
    res.json(`El curso con el id ${id} fue eliminado exitosamente`);
});
    
//PUT
app.put("/cursos/:id", async (req, res) => {
    const { id } = req.params;
    try {
    const actualizacionesc = await prisma.cursos.update({
        where: { c_id: Number(id) },
          // req.body es la info que manda el usuario para actualizar
        data: req.body,
    });
    res.json({
        datos: actualizacionesc,
        mensaje: `El curso con el id ${id} fue actualizado exitosamente`,
    });
    } catch (e) {
    res.json({ error: `El curso con el id ${id} no existe` });
    }
});    

//CRUD PROFESORES

//GET
app.get("/profesores", async (req, res) => {
    const profesroesnew = await prisma.profesores.findMany();
    res.json({
      success: true,
      payload: profesoresnew,
      message: "Operation Successful",
  });
});

//POST
app.post("/crear_profesores", async (req, res) => {
    const result = await prisma.profesores.create({
        data: req.body,
      });
      res.json(result);
    });
    
    
//DELETE
app.delete("/profesores/:id", async (req, res) => {
    const { id } = req.params;
    const nombres6 = await prisma.profesores.delete({
    where: {
        c_id: Number(id),
    },
    });
    res.json(`El profesor con el id ${id} fue eliminado exitosamente`);
});
    
//PUT
app.put("/profesores/:id", async (req, res) => {
    const { id } = req.params;
    try {
    const actualizacionesp = await prisma.profesores.update({
        where: { p_id: Number(id) },
          // req.body es la info que manda el usuario para actualizar
        data: req.body,
    });
    res.json({
        datos: actualizacionesp,
        mensaje: `El profesor con el id ${id} fue actualizado exitosamente`,
    });
    } catch (e) {
    res.json({ error: `El profesor con el id ${id} no existe` });
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




