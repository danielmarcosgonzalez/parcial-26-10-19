import type { Request, Response } from "express";
import { changeColecciones, changeMusicas, colecciones, musicas } from "../data/musica.data.js";
import type { ColeccionT, MusicaT } from "../models/musica.models.js";


export const getMusica = (req:Request, res:Response)=>{
    res.status(200).json(musicas);
}

export const getMusicaId = (req:Request, res:Response)=>{
    const id = Number(req.params.id);
    //control id
    if(!id){
        res.status(400).json({
            message:`id no valido`
        })
        return;   
    }
    const getMusicaIdFind = musicas.find((m)=>m.id===id);
    //control musica no encontrada
    if(!getMusicaIdFind){
        res.status(404).json({
            message:`Musica con id no encontrada`
        })
        return;
    }
    res.status(202).json(getMusicaIdFind)
}

export const postMusica = (req:Request, res:Response)=>{
    const formato = req.body.formato;
    const nombre = req.body.nombre;
    const duracion = Number(req.body.duracion);
    const caras = Number(req.body.caras);
    const sonido = req.body.sonido;
    const tipo = req.body.tipo;
    //control datos body
    if(!formato || !nombre || !duracion || !caras || !sonido || !tipo){
        res.status(400).json({
            message:`Datos faltantes en body`
        })
        return;
    }

    const newMusica:MusicaT = {
        id:Math.random(),
        formato:{formato:formato},
        nombre:nombre,
        duracion:duracion,
        caras:caras,
        sonido:{tipoSonido:sonido},
        tipo:{tipoMusica:tipo},
    }

    musicas.push(newMusica);
    res.status(201).json({
        message:`Musica creada con exito`
    })
}

export const putMusicaId = (req:Request, res:Response)=>{
    const id = Number(req.params.id);
    const formato = req.body.formato;
    const nombre = req.body.nombre;
    const duracion = Number(req.body.duracion);
    const caras = Number(req.body.caras);
    const sonido = req.body.sonido;
    const tipo = req.body.tipo;
    //control id
    if(!id){
        res.status(400).json({
            message:`id no valido`
        })
        return;   
    }
    //control datos body
    if(!formato || !nombre || !duracion || !caras || !sonido || !tipo){
        res.status(400).json({
            message:`Datos faltantes en body`
        })
        return;
    }
    //control existe musica id
    const putMusicaIdFind = musicas.find((m)=>m.id===id);
    if(!putMusicaIdFind){
        res.status(404).json({
            message:`Musica con id no encontrada`
        })
        return;
    }
    const putMusicaIdMusica:MusicaT[] = musicas.map((m)=>{
        if(m.id===id){
            return{
                id,
                formato:{formato:formato},
                nombre:nombre,
                duracion:duracion,
                caras:caras,
                sonido:{tipoSonido:sonido},
                tipo:{tipoMusica:tipo},
            }
        }else{
            return m;
        }
    })
    changeMusicas(putMusicaIdMusica);
    res.status(201).json({
        message:`Musica con id:${id} se edito correctamente`
    })

}

export const deleteMusicaId = (req:Request, res:Response)=>{
    const id = Number(req.params.id);
    //control id
    if(!id){
        res.status(400).json({
            message:`id no valido`
        })
        return;   
    }
    //control existe musica id
    const deleteMusicaIdFind = musicas.find((m)=>m.id===id);
    if(!deleteMusicaIdFind){
        res.status(404).json({
            message:`Musica con id no encontrada`
        })
        return;
    }

    const deleteMusicaIdMusica = musicas.filter((m)=>!(m.id===id));
    changeMusicas(deleteMusicaIdMusica);

    //const ejemplo:ColecionT[] = colecciones.map((c)=>c.musicaIds.filter((m)=>!(m===id)));
    //console.log(colecciones);

    res.status(201).json({
        message:`Musica con id:${id} eliminada`
    })

}