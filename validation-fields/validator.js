const{validationResult}=require('express-validator');
const{request,response}=require('express');



const validationsF = (req=request , res=response ,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
       
        console.log(errors)
        return res.status(400).json(errors)
        
    }
    next()
}



module.exports = validationsF