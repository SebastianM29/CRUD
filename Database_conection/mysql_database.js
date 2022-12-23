const mysql = require('mysql')
const obj = require('../config/conf')


let conexion = 
    {
        host:'localhost',
        user:obj.USERMySql,
        password: obj.PASS,
        database:'articulosdb'
        
      
      }



const mysqlConection = async()=> {


    const conectar = await mysql.createConnection(conexion)
    conectar.connect((err)=>{

        if (err) {
            throw err
            
        } else {
            console.log('conectado a nuestra base de datos')
        }

    })

    
    
    




}




module.exports = {mysqlConection,conexion}

