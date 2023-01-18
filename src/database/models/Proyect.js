module.exports= function(sequelize, dataTypes){
    let alias = 'Proyect'

    cols= {
        id:{
            type:dataTypes.INTEGER(10),
            primaryKey:'true',
            autoIncrement:'true'
        },
        proyect_name:{
            type:dataTypes.STRING(100)
        },
        proyect_function:{
            type:dataTypes.STRING(500)
        },
        proyect_logo:{
            type:dataTypes.STRING(100)
        },
        proyect_img:{
            type:dataTypes.STRING(100)
        },
        proyect_date:{
            type: dataTypes.DATE
        },
       
    }

    let config = {
        tableName:'proyects',
        timestamps:false
    }


    let Proyect=sequelize.define(alias, cols, config);


    return Proyect;
}