# Practica Final DevOps - CI/CD con GitHub

Aplicacion web sencilla en Node.js (Express) que responde "Hola Mundo", con pipeline de CI/CD usando GitHub Actions.

## Que hace el pipeline

Al hacer push a la rama `main`:

1. Instala las dependencias del proyecto
2. Ejecuta la prueba unitaria
3. Construye la imagen de Docker y la sube a Docker Hub
4. Dispara el deploy en Render

## Como correrlo localmente

```
npm install
npm start
```

La app queda escuchando en `http://localhost:3000`

## Como correr la prueba

```
npm test
```

## Docker

```
docker build -t practica-final-devops .
docker run -p 3000:3000 practica-final-devops
```

## Secretos necesarios en GitHub

En Settings > Secrets and variables > Actions del repositorio:

- `DOCKERHUB_USERNAME`
- `DOCKERHUB_TOKEN`
- `RENDER_API_KEY`
- `RENDER_SERVICE_ID`
