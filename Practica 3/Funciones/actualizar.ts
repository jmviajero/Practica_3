//@ts-ignore
import { Request, Response } from "npm:express@4.18.2"
import {DiscosModel} from "../db/EsquemaDisco.ts"

export const actualizar = async (req:Request, res:Response) => {
    try {
        const id= req.params.id;
        
        const actuali= await DiscosModel.findOneAndUpdate({id: id},{
            Nombre: req.params.Nombre,
            Autor: req.params.Autor,
            Formato: req.params.Formato,
            Matriz: req.params.Matriz,
            Pais_de_impresion: req.params.Pais_de_impresion,
            Arte_de_portada: req.params.Arte_de_portada
        })

        res.status(200).send(actuali);
        
    } catch (error) {
        res.status(500).send(error.message);
        return;
    }
}