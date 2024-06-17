# Juego de dados con TypeScript, Node.js y Arquitectura Hexagonal

## Tabla de Contenidos

- [Descripción](#descripción)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Documentación de Rutas](#documentación-de-rutas)

## Descripción

Esta es una API RESTful desarrollada con TypeScript y Node.js, siguiendo una arquitectura hexagonal.
El proyecto utiliza Docker Compose para la configuración y administración de contenedores.
Hay un contenedor "Rolling", que crea una imagen llamada App con toda la logica del Backend, y al mismo tiempo se crea una base de datos de MySQL.

Front - End en desarrollo ⏳

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

2.⚠️ Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias.

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

2. La API estará disponible en `http://localhost:3000/api`.

## Uso

Una vez levantado el proyecto en Docker, se pueden probar las rutas con la colección de ThunderClient incluída en el repositorio

### Ejecutar el Proyecto en Desarrollo

```sh
npm run dev
```

### Estructura del Proyecto

rolling_dices
├── src
│   ├── application
│   │   ├── server
│   │   └── services
│   ├── domain
│   │   ├── models
│   │   └── repositories
│   └── infrastructure
│       ├── controllers
│       ├── database
│       ├── routes
│       ├── utils
│       ├── index.ts
│       └── dependences.ts
├── Dockerfile
├── docker-compose.yml
├── .env
├── package.json
└── README.md

### Documentación de Rutas

/players:

GET / players : Lista todos los jugadores con sus victorias y total de partidas.

POST / players : Crea un jugador.
*Se puede crear un jugador sin pasarle ninguna información, y creará un jugador llamado "Anonymous".
También, se puede enviar el nombre del jugador, en el cuerpo de la petición.

PATCH / players / :id : Modifica el nombre del jugador, por id del jugador pasado por parámetro de la petición.

/games:

GET / games / :id : Lista las jugadas de un jugador, por id pasado por parámetro de la petición.

POST / games / :id : Crea una partida de dados, donde se generan los valores de los dados (1-6) de manera aleatoria y guarda la partida en la tabla de jugadas.

DELETE / games / :id : Elimina todas las partidas de un jugador. Reinicia contadores a cero.

/ranking:

GET / ranking : Lista el ranking de jugadores con sus porcentajes de éxito.

GET / ranking / winner : Lista el Top 3 de jugadores con mayor porcentajes de éxito.

GET / ranking / loser : Devuelve los últimos 3 jugadores con menor porcentaje de éxito en el ranking general.
