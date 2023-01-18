const db = require('../database/models')

const controller={
    home:function(req,res) {
        res.render('index',{
            titulo:'Home',
            css:'/css/home.css'
        })
    },
    nuevoProyecto:function(req,res) {
        res.render('carga_proy',{
            titulo:'Carga',
            css:'/css/alta_proy.css'
        })
    },
    list:function(req,res){
        db.Proyect.findAll()
        .then(function(proyecto) {
            res.render('carga_proy',{
                titulo:'Carga',
                css:'/css/alta_proy.css',
                proyecto
            })
        })
    },
    carga:function(req,res) {
        db.Proyect.create({
            proyect_name: req.body.proyect_name,
            proyect_function: req.body.proyect_function,
            proyect_logo:req.files.proyect_logo[0].filename,
            proyect_img: req.files.proyect_img[0].filename,
            proyect_date: req.body.proyect_date,
            
        }).then(function () {
            res.redirect('/');
        })

    }
}

module.exports=controller;