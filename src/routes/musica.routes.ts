import { Router } from "express";
import { deleteMusicaId, getMusica, getMusicaId, postMusica, putMusicaId } from "../controllers/musica.controllers.js";


const musicaRoutes = Router();

musicaRoutes.get("/",getMusica);
musicaRoutes.get("/:id",getMusicaId);
musicaRoutes.post("/",postMusica);
musicaRoutes.put("/:id",putMusicaId);
musicaRoutes.delete("/:id",deleteMusicaId);


export default musicaRoutes;