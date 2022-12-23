const { check }=require('express-validator')
const {Router} = require('express')
const router = Router()


const {dataGet,dataGetid, dataPost, dataPut, dataDelete} = require("../controllers/controllers");
const validationsF = require('../validation-fields/validator');




router.get('/api/articulos', dataGet);
router.get('/api/articulos/:id',dataGetid);
router.post('/api/articulos',
[check('descripcion','Ingrese descripcion del producto').trim().not().isEmpty(),


check('precio','Ingrese precio del producto').trim().not().isEmpty(),
check('precio','ingrese importe').isNumeric(),
check('precio','debe ser con punto').isDecimal({locale:'en-US'}),

check('stock','Ingrese stock del producto').trim().not().isEmpty(),

validationsF
]
,dataPost);
router.put('/api/articulos/:id',dataPut)
router.delete('/api/articulos/:id',dataDelete)






module.exports = router
  