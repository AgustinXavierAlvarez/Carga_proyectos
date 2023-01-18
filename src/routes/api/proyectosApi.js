const db = require("../../database/models");
const Proyect = require("../../database/models/Proyect");

const controller={
    proyectos:function(req,res) {
        db.Proyect.findAll()
        .then(function(proyectos) {
            let respuesta={
                meta:{
                    status:200,
                    count:usuarios.length,
                    url:'/api/proyects'
                },
                proyects:
                proyectos.map(proyect=> {
                    return{
                        id: user.id,
                        proyect_name: proyect.proyect_name,
                        proyect_function: proyect.proyect_function,
                        proyect_logo: "/img" + proyect.proyect_logo,
                        proyect_img:"/img" + proyect.proyect_img,
                        proyect_date: proyect.proyect_date
                    }
                })
            }
            res.status(200).json(respuesta)
        })
    }
}