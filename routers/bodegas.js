
// import validateSchema from '../validators/middleware/middlewareDatos.js'
// import schema from '../validators/validadorUsuarios.js'
import express from 'express';
import con from '../server/db.js';

const appBodegas = express.Router();

/**
 *  ! Metodo GET
 */
appBodegas.get('/:id?', (req, res) => {
    (req.params.id) ?
        con.query(
            /*sql*/`SELECT * FROM bodegas WHERE id=${req.params.id}`,
            (err, data, fils) => {
            res.send(data);
        }
        )
    :
    con.query(
        /*sql*/`SELECT * FROM bodegas`,
        (err, data, fils) => {
            res.send(data);
        }
        );
});

export default appBodegas;