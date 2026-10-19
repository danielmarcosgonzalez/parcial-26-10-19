

export type FormatoT = {
    formato:string
}

export type TipoSonidoT = {
    tipoSonido:string
}

export type TipoMusicaT = {
    tipoMusica:string
}

export type MusicaT = {
    id: number,
    formato: FormatoT,
    nombre: string,
    duracion: number,
    caras: number,
    sonido: TipoSonidoT,
    tipo: TipoMusicaT,
}

export type ColeccionT = {
    id: number,
    nombreColeccionista: string,
    musicaIds: number[],
}

export type ColeccionRespuesta = {
    id: number,
    nombreColeccionista: string,
    musica: MusicaT[],
    digital: MusicaT[],
    analogica: MusicaT[],
}