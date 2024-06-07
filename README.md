# Proyecto de API REST con TypeScript, Node.js y Arquitectura Hexagonal

## Descripción

Esta es una API RESTful desarrollada con TypeScript y Node.js, siguiendo una arquitectura hexagonal. El proyecto utiliza Docker Compose para la configuración y administración de contenedores.

## Tabla de Contenidos
<!--                                     A COMPLETAR 
- [Descripción](descripción)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](estructura-del-proyecto)
- [Documentación de Rutas](documentación-de-rutas)
  - [GET](get)
  - [POST](post)
  - [PATCH](patch)
  - [DELETE](delete)
- [Contribución](contribución) -->

## Instalación

### Prerrequisitos

- Node.js
- Docker
- Docker Compose

### Configuración del Entorno

1. Clona el repositorio:

    ```sh
    git clone https://github.com/ghOdisea/6.1-gonzalo-jordinky
    cd 6.1-gonzalo-jordinky
    ```

2. Instala las dependencias:

    ```sh
    npm install
    ```

3. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias.

```sh
MYSQL_DOCKER_HOST=mysql_db
MYSQL_USER=root
MYSQL_DATABASE=rolling_dices
MYSQL_PASSWORD=secret

MYSQL_LOCAL_PORT=3307
MYSQL_DOCKER_PORT=3306

NODE_LOCAL_PORT=3000
NODE_DOCKER_PORT=3000
```

### Uso de Docker Compose

1. Construye y levanta los contenedores:

    ```sh
    docker-compose up --build
    ```

2. La API estará disponible en `http://localhost:3000`.

## Uso

### Ejecutar el Proyecto en Desarrollo

```sh
npm run dev
```
<!-- 
### Ejecutar Tests

```sh
npm test
``` -->
### Estructura del Proyecto

.
├── src
│   ├── application
│   ├── domain
│   ├── infrastructure
│   └── interfaces
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
