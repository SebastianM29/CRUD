require('dotenv').config()
const express = require('express')
const {mysqlConection} = require('../Database_conection/mysql_database')
const cors = require('cors');
const obj = require('../config/conf');





class Server { 

    constructor(){

        this.app=express();
        this.port=obj.PORT;

        this.middlewares();
        this.routes();
        this.DbConection();


    }

    middlewares () {
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:false}))
        this.app.use(cors())
        this.app.use(express.static('public'))

    }


    routes(){
        this.app.use('/',require('../routes/routes'))
      

    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`conectado a puerto ${this.port}`)

        })

    }

    async DbConection (){

        await mysqlConection();


    }



    
}



module.exports=Server

