const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <title>Hola Mundo - DevOps</title>
    </head>
    <body style="font-family: sans-serif; text-align: center; margin-top: 60px;">
      <h1>¡Hola Mundo desde Docker!</h1>
          <p>Mi primera aplicación web utilizando Docker - ITLA.</p>
          <p>Jean Carlos Cabral P. / 2025 - 1380</p>
    </body>
    </html>
  `);
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});