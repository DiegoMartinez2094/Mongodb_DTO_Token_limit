# Mongodb_DTO_Token_limit

Este archivo funciona para generar peticiones(post, get...) controladas usando middleware de tipos de datos, cantidad de datos, limite de peticiones por token etc.

¿Cómo usarlo?:

1-clonar el repositorio

2- instalar node, instalar las dependencias con el comando (npm install)

3- verificar la transcripción de archivos TypeScript con el comando (npm run tsc)

4-verificar las variables de entorno en el archivo . env (conexion del servidor y de la base de datos en Atlas)

5- conectar la base de datos con la extension de visual estudio (**MongoDB for VS Code**) la de la hojita verde.

-incresamos a la extensión oprimimos conectar nos pedirá el link de conexion de la base de datos la cuál encontraremos en la pagina Atlas(ingresamos con el correo, en la parte izquierda la opcion Database, luego en la opción connect, MongoDB for VS code, opción 3) 

-Obtenemos un link de esta manera:  en el cuál cambiaremo `<password>` por = 1095821320dm y damos enter

| mongodb+srv://diegofernandomartinezcalderon:`<password>`@cluster0.vzylork.mongodb.net/ |
| ---------------------------------------------------------------------------------------- |

en la parte derecha de la extensión nos saldrá una hoja de color verde que nos indica conexión exitosa.

6-corremos el archivo app.js con el comando en la terminal (npm run dev) nos saldrrá el puerto de conexión del servidor.

7- ahora realizamos pruebas con la extensión thunderclient de visual studio:

 -primero pedimos el token con la solicitud Get y la url= http://127.10.10.10:5011/token/User,

Este Token tiene una duración de 30 minutos el cuál se puede modificar en el archivo  limit/token.js  .setExpirationTime("30m")

nos saldrá el token de esta manera: {
  "status": 201,
  "message": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjZWR1bGFfdXN1YXJpbyI6MCwibm9tYnJlX3VzdWFyaW8iOiJGYWtlciIsImVkYWRfdXN1YXJpbyI6MCwiaWF0IjoxNjkxNjgzMTA5LCJleHAiOjE2OTE2ODQ5MDl9.2jaovzoWoILUrarWbwQ-Edijn7c5edTDuC29pjBLVOU"
}

-copiamos y pegamos el toquen 

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjZWR1bGFfdXN1YXJpbyI6MCwibm9tYnJlX3VzdWFyaW8iOiJGYWtlciIsImVkYWRfdXN1YXJpbyI6MCwiaWF0IjoxNjkxNjgzMTA5LCJleHAiOjE2OTE2ODQ5MDl9.2jaovzoWoILUrarWbwQ-Edijn7c5edTDuC29pjBLVOU

en la parte de "Headers" de la extension de visual, en el header escribimos "Authorization" y en value pegamos el token y cambiamos la url por:

 http://127.10.10.10:5011/campus

nos saldrá la collección de la base de datos en la aprte derecha, y en la terminal nos saldrá:

{
  limit: 5,                    //cantidad limite de solicitudes en 30 segundos 
  current: 1,              //cantidad de solicitudes hechas
  remaining: 4,         //cantidad de solicitudes restantes
  resetTime: 2023-08-10T16:02:18.573Z
}

esta candidad la podemos variar en el archivo limit/config.js en el parametro "windowMs:"
