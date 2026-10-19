import { Router } from "express";
import { pathColecciones } from "../controllers/colecciones.controllers.js";

const coleccionesRouter = Router();

coleccionesRouter.get("/colecciones",pathColecciones);


export default coleccionesRouter;