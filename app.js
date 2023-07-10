import express from 'express';
import dotenv from 'dotenv'
import appUsuario from './routers/bodegas.js';
import appProductos from './routers/productos.js';
// import appCarros from './routers/carros.js';
// import appRelacionados from './routers/relacionados.js';



dotenv.config();
const appExpress = express()

appExpress.use(express.json())

appExpress.use('/bodegas',appUsuario)
appExpress.use('/productos',appProductos)
// appExpress.use('/carros',appCarros)
// appExpress.use('/relacionados',appRelacionados)


const port = process.env.PORT || 3000
const addresses = process.env.IP
appExpress.listen(port, () => {
  console.log(`Servidor escuchando en http://${addresses}:${port}/`);
});

export default appExpress;