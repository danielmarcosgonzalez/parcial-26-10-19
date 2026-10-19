import express from "express";
import musicaRoutes from "./routes/musica.routes.js";
import coleccionesRouter from "./routes/colecciones.routes.js";

const app = express();

app.use(express.json());

app.use("/musica",musicaRoutes)
app.use("/colecciones",coleccionesRouter);

app.listen(3001,()=>{
    console.log(`Api funcionando en el puerto 3001`)
})