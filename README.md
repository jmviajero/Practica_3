# Practica_3

Este programa consta de la craeacion de una API conectada a una base de datos en este caso MONGO_DB.

Los usuarios de github tendrán que proporcionar su propio archivo proporcionando una URL de mongo y otro para el puerto a utilizar

cada vez que aparezcan una ruta con :<valor> debera sustituirse por un parametro

Todas las rutas empezaran como localhost:<numero_de_puerto>endpoint

Los diferentes endpoints de esta api serán
GET ->

-Obtener todos los discos existentes

ruta a utilizar : /mostrar_todo

-Obtener un disco mediante id

ruta a utilizar : /mostrar_por_id/:id

-Obtener listado de discos según nombre

ruta a utilizar : /mostrar_por_nombre/:Nombre

-Obtener listado de discos según formato

ruta a utilizar : /mostrar_por_formato/:Formato

-Obtener listado de discos según país de impresión

ruta a utilizar : /mostrar_por_pais_de_impresion/:Pais_de_impresion

POST ->

-Crear nuevo disco

ruta a utilizar : /anadir_disco_por_parametros/:Nombre/:Autor/:Formato/:Matriz/:Pais_de_impresion/:Arte_de_portada/:id

PUT ->

-Actualizar un disco existente indicándolo por su id

ruta a utilizar : /actualizar_disco_por_parametros/:id/:Nombre/:Autor/:Formato/:Matriz/:Pais_de_impresion/:Arte_de_portada

DELETE ->

-Eliminar un disco mediante su id

ruta a utilizar : /eliminar/:id
