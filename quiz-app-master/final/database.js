const mongoose =require('mongoose');

mongoose.connect("mongodb://localhost/admin").then(db => console.log("conectado"))
.catch(err => console.error(err));



module.exports =mongoose;