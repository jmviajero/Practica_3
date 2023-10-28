import { Disco } from "../Types.ts"
import mongoose from "npm:mongoose@7.6.3";

const EsquemaDiscos= mongoose.Schema;

const Esquemadediscos= new EsquemaDiscos ({
    Nombre: {type:String, required:true, unique:true},
    Autor: {type:String, required:true},
    Formato: {type:String, required:true},
    Matriz: {type:String, required:false},
    Pais_de_impresion: {type:String, required:true},
    Arte_de_portada: {type:String, required:true},
    id: {type:Number, required:true, unique:true}
},{
    timestamps:true
})

export type DiscosModelType = mongoose.Document & Omit<Disco, "Matriz">;
export const DiscosModel= mongoose.model<DiscosModelType>("Lista de discos",Esquemadediscos);