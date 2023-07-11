import Joi from 'joi';
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
const schema = Joi.object({
    nombre : Joi.string().min(0).max(255),
    id_responsable : Joi.number().integer().positive(),
    estado : Joi.number().positive().max(255),
    created_by : Joi.number().integer().positive().allow(null),
    update_by : Joi.number().integer().positive().allow(null),
    created_at : Joi.date().allow(null),
    updated_at : Joi.date().allow(null),
    deleted_at : Joi.date().allow(null),
});


export default schema;