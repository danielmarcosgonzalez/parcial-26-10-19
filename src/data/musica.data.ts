import type { ColeccionT, MusicaT } from "../models/musica.models.js";

export let colecciones:ColeccionT[] = [
    {
        id:1,
        nombreColeccionista:"Coleccionista1",
        musicaIds:[1,2],
    },{
        id:2,
        nombreColeccionista:"Coleccionista2",
        musicaIds:[3,4],
    }
]

export let musicas:MusicaT[] = [
    {
        id:1,
        formato:{formato:"vinilo"},
        nombre:"musica1",
        duracion:5,
        caras:1,
        sonido:{tipoSonido:"mono"},
        tipo:{tipoMusica:"analogica"},
    },{
        id:2,
        formato:{formato:"CD"},
        nombre:"musica2",
        duracion:6,
        caras:2,
        sonido:{tipoSonido:"estereo"},
        tipo:{tipoMusica:"digital"},
    },{
        id:3,
        formato:{formato:"DVD-Audio"},
        nombre:"musica3",
        duracion:8,
        caras:1,
        sonido:{tipoSonido:"mono"},
        tipo:{tipoMusica:"nalogica"},
    },{
        id:4,
        formato:{formato:"CD"},
        nombre:"musica4",
        duracion:10,
        caras:2,
        sonido:{tipoSonido:"cuadrafonico"},
        tipo:{tipoMusica:"digital"}
    }
]

export const changeColecciones = (colecconesParams:ColeccionT[])=>{
    colecciones = colecconesParams;
}

export const changeMusicas = (musicasParams:MusicaT[])=>{
    musicas = musicasParams;
}