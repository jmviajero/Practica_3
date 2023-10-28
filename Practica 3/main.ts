import express from "npm:express@4.18.2"
import mongoose from "npm:mongoose@7.6.3"

import {load} from "https://deno.land/std@0.204.0/dotenv/mod.ts"
import { mostrar_por_formato, mostrar_por_id, mostrar_por_nombre, mostrar_por_pais_de_impresion, mostrar_todo } from "./Funciones/mostrar.ts";
import { anadir_disco } from "./Funciones/anadir.ts";
import { actualizar } from "./Funciones/actualizar.ts";
import { elimina } from "./Funciones/eliminar.ts";

const env= await load();

const MONGO_URL= env.MONGO_URL || Deno.env.get ("MONGO_URL");

const PORT= env.PORT || Deno.env.get("PORT") || 3001

if(!MONGO_URL){
  console.log("URL no valida")
  Deno.exit(1);
}

try {
  await mongoose.connect(MONGO_URL);
  console.log("Conectado con exito a la base de datos")

  const app = express();
  app.use(express.json());

  app.get("/mostrar_todo", mostrar_todo);

  app.get("/mostrar_por_id/:id", mostrar_por_id);

  app.get("/mostrar_por_nombre/:Nombre", mostrar_por_nombre);

  app.get("/mostrar_por_formato/:Formato", mostrar_por_formato);

  app.get("/mostrar_por_pais_de_impresion/:Pais_de_impresion", mostrar_por_pais_de_impresion);

  app.post("/anadir_disco_por_parametros/:Nombre/:Autor/:Formato/:Matriz/:Pais_de_impresion/:Arte_de_portada/:id", anadir_disco);

  app.put("/actualizar_disco_por_parametros/:id/:Nombre/:Autor/:Formato/:Matriz/:Pais_de_impresion/:Arte_de_portada", actualizar);

  app.delete("/eliminar/:id", elimina);

  app.listen(PORT, ()=>{
    console.log("Escuchando por el puerto " + PORT);
  })

} catch (error) {
  console.error(error);
}