//@ts-ignore
import {Request, Response} from "npm:express@4.18.2"
import {DiscosModel} from "../db/EsquemaDisco.ts"

export const elimina = async (req:Request, res:Response) => {
    try {
        const ids= req.params.id;

        const borrar= await DiscosModel.findOneAndDelete({id:ids}).exec();
        res.status(200).send(borrar);

    } catch (error) {
        res.status(500).send(error.message);
        return;
    }
}