
// import validateSchema from '../validators/middleware/middlewareDatos.js'
// import schema from '../validators/validadorUsuarios.js'
import express from 'express';
import con from '../server/db.js';

const appProductos = express.Router();

/**
 *  ! Metodo GET listar los datos de bodegas
 */
appProductos.get('/:id?', (req, res) => {
    (req.params.id) ?
        con.query(
            /*sql*/`SELECT * FROM productos WHERE id=${req.params.id}`,
            (err, data, fils) => {
            res.send(data);
        }
        )
    :
    con.query(
        /*sql*/`SELECT * FROM productos ORDER BY nombre`,
        (err, data, fils) => {
            res.send(data);
        }
        );
});
/**
 * ! metodo POST
 * 
 * ? manera de insertar los datos
 */
/*  
    "nombre": "string",
    "id_responsable": bigint,
    "estado": tyninit,
    "created_by": bigint,
    "update_by": bigint,
    "created_at": "timeStamp",
    "updated_at": timeStamp,
    "deleted_at": timeStamp
*/
// appBodegas.post('/',(req, res) => {
//     const body = req.body
//         con.query(
//         /*sql*/`INSERT INTO bodegas SET ?`,
//         body,
//         (err,data,fils) => {
//             data.affectedRows += 200;
//             let resul = body;
//             resul.id = data.insertId;
//             res.status(201).json({
//                 message : "se ha creado con exito",
//                 data : resul
//             })
//         }
//     )
// })
export default appProductos;