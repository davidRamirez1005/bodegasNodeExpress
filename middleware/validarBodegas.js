/*eslint-disable*/
import DatoBodegas from '../controller/bodegasDto.js'

export const middlewareBodega = ((req, res, next) => {
    (DatoBodegas())?next():res.send(404)
});