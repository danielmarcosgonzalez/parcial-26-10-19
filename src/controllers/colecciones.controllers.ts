import type { Request, Response } from "express";
import { colecciones } from "../data/musica.data.js";


export const pathColecciones = (req:Request, res:Response)=>{
    const id =  Number(req.params.id);
    const nombreColeccionista = req.body.nombreColeccionista;



    const pathfind = colecciones.find((c)=>c.id===id)

    const path = colecciones.map((c)=>{
        if(c.id===id){
            return{
                ...c,
                nombreColeccionista:nombreColeccionista
            }
        }else{
            return c;
        }
    })
    res.status(201).json({
        message:`Cambio de nombre completado`
    })
}