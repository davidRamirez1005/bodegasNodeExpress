/* eslint-disable */
import express from 'express';
import dotenv from 'dotenv';
import { servidor } from './server/db.js';
import appUsuario from './routers/bodegas.js';
import appProductos from './routers/productos.js';
// import appCarros from './routers/carros.js';
// import appRelacionados from './routers/relacionados.js';
/* eslint-enable */
dotenv.config();
const appExpress = express();

appExpress.use(express.json());

appExpress.use('/bodegas', appUsuario);
appExpress.use('/totales', appProductos);
// appExpress.use('/carros',appCarros)
// appExpress.use('/relacionados',appRelacionados)

appExpress.listen(servidor.port, () => {
  // eslint-disable-next-line
  console.log(`Servidor escuchando en http://${servidor.addresses}:${servidor.port}/`);
});

export default appExpress;
