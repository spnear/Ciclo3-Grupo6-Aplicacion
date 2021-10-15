const mongoose = require('mongoose');
const schema = mongoose.Schema;


var viajesSchema = new schema({
desde: {
    type: String
},
hacia: {
    type: String
},
fechaIda: {
    type: String
    
},
fechaRegreso: {
    type: String
},

nombre: {
    type:String
},
idNumber: {
  type: Number

 
}
},



{
    collection: 'viaje'
}

);





module.exports = mongoose.model('viajes', viajesSchema);