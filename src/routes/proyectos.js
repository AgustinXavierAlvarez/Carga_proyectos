const express= require('express')
const router= express.Router();

const controllerProyectos= require('../controller/controllerProy')

const multerPic= require('../middlewares/multerProy')

router.get('/',controllerProyectos.home)
router.get('/proyecto/nuevo',controllerProyectos.nuevoProyecto)
router.post('/proyecto/nuevo',multerPic.fields([
    {name:'proyect_img',maxCount: 1},
    {name:'proyect_logo',maxCount: 1}
]),controllerProyectos.carga)
router.get('/proyect_list',controllerProyectos.list)

module.exports=router