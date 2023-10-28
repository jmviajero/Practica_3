import { DiscosModel } from "../db/EsquemaDisco.ts"
//@ts-ignore
import { Request, Response } from "npm:express@4.18.2";

export const anadir_disco= async (req:Request, res:Response) => {
    try {
       
        const añadir = new DiscosModel ({
            Nombre: req.params.Nombre,
            Autor: req.params.Autor,
            Formato: req.params.Formato,
            Matriz: req.params.Matriz,
            Pais_de_impresion: req.params.Pais_de_impresion,
            Arte_de_portada: req.params.Arte_de_portada,
            id: req.params.id
        })

        await añadir.save();

        res.status(200).send(añadir);

    } catch (error) {
        res.status(500).send(error.message);
        return;
    }
}