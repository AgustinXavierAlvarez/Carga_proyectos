const express= require('express')
const app = express();
const routeProyectos=require('./src/routes/proyectos')

app.set('view engine', 'ejs')
app.set('views',__dirname + '/src/views')
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static('public'));

app.listen (3010, () => { 
    console.log ('Servidor corriendo en puerto 3010')
})

app.use('/',routeProyectos);

app.use((req, res, next) => {
    res.status(404).render('error',{
        titulo:'Error',
        css:'/css/home.css'
    });
})
