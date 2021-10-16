const person = require('../models/person');
const viajes = require('../models/viajes');

class ServerController {

   
    constructor() {


       
    } 

    

    registerVu(req, res) {
       viajes.create(req.body, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(201).json(data);
            }
        });
    }

    updateVu(req, res) {
        let { id, desde, hacia, fechaIda, fechaRegreso, nombre, idNumber } = req.body;
        let obj = {desde, hacia, fechaIda, fechaRegreso,nombre, idNumber }
       viajes.findByIdAndUpdate(id, { $set: obj }, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

    deleteVu(req, res) {
        let { id } = req.body;
       viajes.findByIdAndDelete(id, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

    getVu(req, res) {
        let id = req.params.id;
       viajes.findById(id, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }


    register(req, res) {
        person.create(req.body, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(201).json(data);
            }
        });
    }


    loginUser(req, res) {
        const {email,password} = req.body;
       
        person.findOne( email, (err, person) => {
            if (err) {
                res.status(500).send('Error de autenticacion');
            }else if(!person){
                res.status(500).send('Usuario no existente');
            }else {
                person.isCorrecPassword(password,(err, result) =>{
                    if(err){res.status(500).send();}
                    else if(result){res.status(200).send('Autenticacin Correcta');}
                    else{res.status(500).sen('email y/o password incorrectos');}
            
                });
            }
        })
            
    }


  

    getUsers(req, res) {
        let email, password  = req.body;
        person.find( { email },{ password }, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

  
}

exports.default = ServerController;