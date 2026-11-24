# Práctica DevOps - Entrega Continua y Integración

## Descripción

Este proyecto consiste en desarrollar una aplicación web sencilla utilizando JavaScript y Node.js que muestra un mensaje de Hola Mundo.

El objetivo principal es aplicar los conceptos básicos de DevOps mediante Docker, Docker Hub, GitHub Actions y Render, automatizando la creación de imágenes y el despliegue de la aplicación.

## Objetivo de la práctica

Comprender y aplicar el ciclo básico de DevOps mediante el desarrollo de una aplicación web, la creación de contenedores Docker, la publicación de imágenes y la automatización de procesos CI/CD con GitHub Actions.

## Tecnologías utilizadas

- **JavaScript:** lenguaje utilizado para desarrollar la aplicación.
- **Node.js:** entorno de ejecución de JavaScript.
- **Docker:** herramienta utilizada para crear y ejecutar contenedores.
- **Docker Hub:** plataforma para almacenar y publicar imágenes Docker.
- **Git:** sistema de control de versiones.
- **GitHub:** plataforma para alojar el código fuente.
- **GitHub Actions:** herramienta utilizada para automatizar el proceso de integración y despliegue continuo (CI/CD).
- **Render:** plataforma utilizada para desplegar la aplicación en producción.

## Estructura del proyecto

```text
PracticaDevOps/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── server.js
├── package.json
├── Dockerfile
├── .gitignore
└── README.md
```

## Ejecución local

Para ejecutar el proyecto localmente se necesita tener instalado Node.js y Docker.

### 1. Ejecutar con Node.js

```bash
npm start
```

La aplicación estará disponible en:

http://localhost:3000

### 2. Crear la imagen Docker

```bash
docker build -t holamundo-devops .
```

### 3. Ejecutar el contenedor

```bash
docker run -d -p 3000:3000 --name hola-mundo holamundo-devops
```

La aplicación estará disponible en:

http://localhost:3000

## Publicación en Docker Hub

La imagen de la aplicación se publica en Docker Hub utilizando el siguiente formato:

```text
docker.io/elprodigi/holamundo-devops:latest
```

Para subir una imagen manualmente se utilizan los siguientes comandos:

```bash
docker login
docker tag holamundo-devops elprodigi/holamundo-devops:latest
docker push elprodigi/holamundo-devops:latest
```

## Automatización con GitHub Actions

Se utiliza GitHub Actions para automatizar el proceso de integración y despliegue continuo.

El archivo de configuración se encuentra en:

`.github/workflows/deploy.yml`

El flujo automatizado realiza las siguientes tareas:

1. Descarga el código fuente del repositorio.
2. Configura Docker Buildx.
3. Inicia sesión en Docker Hub.
4. Construye la imagen de la aplicación.
5. Publica la imagen en Docker Hub.
6. Despliega la nueva imagen en Render.

La automatización se ejecuta cuando se realizan cambios y se suben a la rama principal `main`.

## Configuración de secretos

Para permitir que GitHub Actions acceda a los servicios externos, se utilizan los siguientes secretos en GitHub:

| Secreto | Descripción |
|---|---|
| DOCKERHUB_USERNAME | Usuario de Docker Hub |
| DOCKERHUB_TOKEN | Token de acceso de Docker Hub |
| RENDER_API_KEY | Clave API de Render |
| RENDER_SERVICE_ID | Identificador del servicio en Render |

## Despliegue en Render

Render se utiliza como proveedor de alojamiento para ejecutar la aplicación en producción. La plataforma recibe la nueva imagen Docker publicada en Docker Hub mediante GitHub Actions y realiza el despliegue correspondiente.

## Repositorios y enlaces

- **GitHub:** https://github.com/TheProdigi/Practica-Entrega-Continua-Jean-Carlos-CP-20251380
- **Docker Hub:** https://hub.docker.com/r/elprodigi/holamundo-devops
- **Aplicación en Render:** https://hola-mundo-devops-l6da.onrender.com

## Autor

Jean Carlos Cabral / 2025 - 1380