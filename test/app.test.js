// Prueba unitaria basica de la aplicacion
// Uso el modulo de pruebas que trae Node (node:test), no necesito instalar nada mas

const test = require("node:test");
const assert = require("node:assert");
const http = require("node:http");
const app = require("../app");

test("la ruta principal responde con Hola Mundo", (t, done) => {
  const servidor = app.listen(0, () => {
    const puerto = servidor.address().port;

    http.get("http://localhost:" + puerto + "/", (res) => {
      let datos = "";
      res.on("data", (parte) => {
        datos += parte;
      });
      res.on("end", () => {
        assert.strictEqual(res.statusCode, 200);
        assert.match(datos, /Hola Mundo/);
        servidor.close();
        done();
      });
    });
  });
});
