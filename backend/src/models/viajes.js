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
    type: Date,
    default: Date.now()
},
fechaRegreso: {
    type: Date,
    default: Date.now()
},
idNumber: {
  type: Number

 
}
},



{
    collection: 'viajes'
}

);





module.exports = mongoose.model('viajes', viajesSchema);