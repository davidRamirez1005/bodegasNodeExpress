## Prueba bodegas con express y MySQL

Este es un proyecto que utiliza Node.js y MySQL para crear un API que administra bodegas, productos, inventarios, historiales y usuarios. El proyecto incluye migraciones de base de datos y varios endpoints para realizar operaciones CRUD.

### Configuración de la Base de Datos

1. Crea una nueva base de datos en MySQL.
2. Configura las credenciales de acceso a la base de datos en el archivo `.env`

### Ejecución del Proyecto

Una vez que hayas configurado la base de datos y hayas importado los datos de prueba, puedes ejecutar el proyecto con el siguiente comando: `npm run dev`.

El proyecto se ejecutará.

### Endpoints Disponibles

1. `GET /bodegas` - Lista todas las bodegas ordenadas alfabéticamente.
2. `POST /bodegas` - Crea una nueva bodega.
3. `GET /productos` - Lista todos los productos en orden descendente por el campo "Total".
4. `POST /productos` - Crea un nuevo producto y asigna una cantidad inicial en el inventario de una bodega por defecto.
5. `POST /inventarios` - Inserta un registro en la tabla de inventarios, validando si la combinación de bodega y producto ya existe.

### Uso de DTO (Data Transfer Object)

Este proyecto utiliza DTO para manejar la transferencia de datos entre el cliente y el servidor. En este proyecto, los DTO se encuentran en la carpeta `storage` y se utilizan para definir la estructura de los datos que se reciben y se envían en cada endpoint. Los controladores utilizan los DTO para validar y transformar los datos antes de realizar operaciones en la base de datos.

### elaborado por:

Jose David Ramirez Mogoocoro, M3