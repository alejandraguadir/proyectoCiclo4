const Usuario = require("../models/usuarios.model");
let response ={
    msg: "",
    exito: false
}
//let declara variables limitando su alcance
exports.create = function(req,res){
    let usuario = new Usuario({
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion : req.body.direccion,
        credito : req.body.credito
    })

    usuario.save(function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al guardar el usuario"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El usuario se guardó correctamente"
        res.json(response)
    })
}
exports.find = function(req,res){
    Usuario.find(function(err, usuarios){
        res.json(usuarios)
    })
}
//find es equivalente a un Select

exports.findOne = function(req,res){
    Usuario.findOne({_id: req.params.id},function(err, usuario){
        res.json(usuario)
    })
}
exports.update = function(req,res){
    let usuario = {
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion : req.body.direccion,
        credito : req.body.credito,
    }

    Usuario.findByIdAndUpdate(req.params.id, {$set: usuario}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al modificar el usuario"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El usuario se modifico correctamente"
        res.json(response)
    })
}
exports.remove = function(req,res){
    Usuario.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al eliminar usuario"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "Usuario eliminado correctamente"
        res.json(response)
    })
}
