// Aplicacion web sencilla que responde "Hola Mundo"
// Practica Final DevOps CI/CD

const express = require("express");
const app = express();

const puerto = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hola Mundo desde DevOps CI/CD");
});

// esto lo dejo aparte para que las pruebas puedan usar la app
// sin tener que levantar el servidor
if (require.main === module) {
  app.listen(puerto, () => {
    console.log("Servidor corriendo en el puerto " + puerto);
  });
}

module.exports = app;
