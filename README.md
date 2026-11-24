Práctica DevOps - Hola Mundo

Descripción

Este proyecto consiste en desarrollar una aplicación web sencilla utilizando JavaScript y Node.js, para posteriormente crear una imagen Docker y publicarla en Docker Hub.

La práctica permite conocer algunos conceptos básicos del ciclo DevOps, incluyendo el desarrollo, la contenerización y la distribución de aplicaciones.

Tecnologías utilizadas

JavaScript

Node.js

Docker

Docker Hub

Git y GitHub

Estructura del proyecto

PracticaDevOps/
│
├── server.js
├── package.json
├── Dockerfile
├── .gitignore
└── README.md

Ejecución del proyecto

1. Construir la imagen Docker

docker build -t holamundo-devops .

2. Ejecutar el contenedor

docker run -d -p 3000:3000 --name hola-mundo holamundo-devops

3. Abrir la aplicación

Acceder desde el navegador a:

http://localhost:3000

Docker Hub

La imagen de Docker se encuentra publicada en Docker Hub:

https://hub.docker.com/r/TU_USUARIO/holamundo-devops

Autor

Jean Carlos Cabral Paniagua / 2025-1380