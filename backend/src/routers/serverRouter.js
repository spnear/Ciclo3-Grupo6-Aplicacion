const express = require('express');
const serverController = require("../controllers/serverController");

class ServerRouter{
    constructor(){
        this.router = express.Router();
        this.config();
    }

    config(){
        const objServerC = new serverController.default();
               
        this.router.post("/vuelo", objServerC.registerVu);
        this.router.put("/vuelo", objServerC.updateVu);
        this.router.get("/vuelo/;id", objServerC.getVu);
        this.router.delete("/vuelo", objServerC.deleteVu); 

        this.router.post("/login", objServerC.loginUser);    
        this.router.get("/users", objServerC.getUsers);
        this.router.post("/users", objServerC.register);    
    }
}

exports.default = ServerRouter;