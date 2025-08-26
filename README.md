# API con Deno, Hono y Drizzle

Una API RESTful construida con Deno, Hono y Drizzle ORM para gestionar usuarios.

## Características

-   API RESTful para operaciones CRUD de usuarios.
-   Escrito en TypeScript y ejecutado en Deno.
-   ORM type-safe con Drizzle.
-   Base de datos PostgreSQL.
-   Estructura de proyecto escalable y organizada.

## Tecnologías Utilizadas

-   [Deno](https://deno.land/)
-   [Hono](https://hono.dev/)
-   [Drizzle ORM](https://orm.drizzle.team/)
-   [PostgreSQL](https://www.postgresql.org/)

## Cómo Empezar

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local.

### Prerrequisitos

-   [Deno](https://deno.land/manual/getting_started/installation) instalado.
-   [PostgreSQL](https://www.postgresql.org/download/) instalado y en ejecución.

### Instalación

1.  **Clona el repositorio:**

    ```bash
    git clone https://github.com/AlfonsoFichas-bit/API_wk.git
    cd API_wk
    ```

2.  **Crea un archivo `.env`** en la raíz del proyecto y añade la URL de conexión a tu base de datos:

    ```
    DATABASE_URL="postgres://tu_usuario:tu_contraseña@localhost:5432/tu_base_de_datos"
    ```

3.  **Aplica las migraciones** de la base de datos para crear las tablas necesarias:

    ```bash
    deno task db:migrate
    ```

### Ejecutar la Aplicación

Para iniciar el servidor en modo de desarrollo, ejecuta:

```bash
deno task dev
```

El servidor se iniciará en `http://localhost:8000`.

## Documentación de la API

La documentación detallada de los endpoints de la API se encuentra en [docs/API_Documentation.md](./docs/API_Documentation.md).

## Migraciones de la Base de Datos

Para generar y aplicar migraciones, utiliza los siguientes comandos:

-   **Generar una nueva migración**:

    ```bash
    deno task db:generate
    ```

-   **Aplicar las migraciones pendientes**:

    ```bash
    deno task db:migrate
    ```
