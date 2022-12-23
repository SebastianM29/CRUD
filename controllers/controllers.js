const{request,response}=require('express')
const mysql = require('mysql')
const { conexion } = require('../Database_conection/mysql_database')
const conect = mysql.createConnection(conexion)


const dataGet = (req=request, res=response) => {

    conect.query("SELECT * FROM articulos",(err,filas)=>{
       if (err)  throw err
        
       res.send(filas)      
       
        
    })

   
    
  
}
const dataGetid = (req=request, res=response) => {

    conect.query("SELECT * FROM articulos WHERE id=? ",[req.params.id],(err,filas)=>{
       if (err)  throw err
        
       res.send(filas)      
        //console.log('llegando')
        //console.log(filas)
       
        
    })

   
    
  
}

const dataPost = (req=request, res=response) => {
    let data = {descripcion:req.body.descripcion,precio:req.body.precio,stock:req.body.stock}
    conect.query('INSERT INTO articulos SET ?',data,(error,result)=>{

        if (error) {
            throw error
            
        } else {
           Object.assign(data,{id: result.insertId })
           res.send(data)
        }

    })

}

const dataPut = (req=request, res=response) => {
    let id=req.params.id;
    let descripcion=req.body.descripcion;
    let precio = req.body.precio;
    let stock = req.body.stock;
    conect.query('UPDATE articulos SET descripcion = ?,precio = ?, stock = ? WHERE id = ? ', [descripcion,precio,stock,id],(error,filas)=> {

        
        if (error) {
            throw error;
        } else {
            res.send(filas)
        }

    })


}

const dataDelete = (req=request, res=response)=> {
    conect.query('DELETE FROM articulos WHERE id = ?',[req.params.id],(error,result)=>{
        if (error) {
            throw error
        } else {
            id=req.params.id
            res.json({ id, 
                     msg:'borrado exitosamente de la base de datos'})
        }
    })
   

}




module.exports={dataGet,dataGetid,dataPost,dataPut,dataDelete}