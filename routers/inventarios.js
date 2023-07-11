/* eslint-disable */
import express from 'express';
import con from '../server/db.js';
const appInventarios = express.Router();

/**
 * ! metodo POST
 */
appInventarios.post("/", (req, res) => {
    const { id_producto, id_bodega, cantidad } = req.body;
  
    // Verificar si la combinación de id_producto y id_bodega ya existe en la tabla de inventarios
    con.query(
      /*sql*/ `SELECT * FROM inventarios WHERE id_producto = ? AND id_bodega = ?`,
      [id_producto, id_bodega],
      (err, data, fils) => {
        if (err) {
          res.status(500).send("Internal server error");
        } else if (data.length === 0) {
          // Si la combinación no existe, realizar un INSERT en la tabla de inventarios
          con.query(
            /*sql*/ `INSERT INTO inventarios (id_producto, id_bodega, cantidad) VALUES (?, ?, ?)`,
            [id_producto, id_bodega, cantidad],
            (err, data, fils) => {
              if (err) {
                res.status(500).send("Internal server error");
              } else {
                res.status(201).send({
                  id: data.insertId,
                  id_producto,
                  id_bodega,
                  cantidad,
                });
              }
            }
          );
        } else {
          // Si la combinación ya existe, realizar un UPDATE en la tabla de inventarios
          const currentCantidad = data[0].cantidad;
          const newCantidad = currentCantidad + cantidad;
  
          con.query(
            /*sql*/ `UPDATE inventarios SET cantidad = ? WHERE id_producto = ? AND id_bodega = ?`,
            [newCantidad, id_producto, id_bodega],
            (err, data, fils) => {
              if (err) {
                res.status(500).send("Internal server error");
              } else {
                res.status(200).send({
                  id_producto,
                  id_bodega,
                  cantidad: newCantidad,
                });
              }
            }
          );
        }
      }
    );
  });
  
appInventarios.get("/", (req, res) => {
    con.query
    (/*sql*/ `SELECT * FROM inventarios`, (err, data, fils) => {
      res.send(data);
    });
  });
export default appInventarios;
