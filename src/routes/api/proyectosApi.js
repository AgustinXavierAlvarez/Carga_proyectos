const express=require('express')
const router= express.Router()

const controllerProy=require('../../controller/api/controllerApiProy')

router.get('/proyects', controllerProy.proyectos);

module.exports=router;