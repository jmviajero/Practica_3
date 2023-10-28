//@ts-ignore
import {Request, Response} from "npm:express@4.18.2"
import { DiscosModel } from "../db/EsquemaDisco.ts"

export const mostrar_todo= async (req:Request, res:Response)=>{
    try {
        const a= await DiscosModel.find().exec();
        res.status(200).send(a);
        
    } catch (error) {
        res.status(500).send(error.message)
        return;
    }
}

export const mostrar_por_id = async (req:Request, res:Response) => {
    try {
        const ids= req.params.id;
        
        const mostrar= await DiscosModel.find({id: ids}).exec();
        res.status(200).send(mostrar);

    } catch (error) {
        res.status(500).send(error.message);
        return;
    }
}

export const mostrar_por_nombre = async (req:Request, res:Response) => {
    try {
        const ids= req.params.Nombre;
        
        const mostrar= await DiscosModel.find({Nombre: ids}).exec();
        res.status(200).send(mostrar);

    } catch (error) {
        res.status(500).send(error.message);
        return;
    }
}

export const mostrar_por_formato = async (req:Request, res:Response) => {
    try {
        const ids= req.params.Formato;
        
        const mostrar= await DiscosModel.find({Formato: ids}).exec();
        res.status(200).send(mostrar);

    } catch (error) {
        res.status(500).send(error.message);
        return;
    }
}

export const mostrar_por_pais_de_impresion = async (req:Request, res:Response) => {
    try {
        const ids= req.params.Pais_de_impresion;
        
        const mostrar= await DiscosModel.find({Pais_de_impresion: ids}).exec();
        res.status(200).send(mostrar);

    } catch (error) {
        res.status(500).send(error.message);
        return;
    }
}
