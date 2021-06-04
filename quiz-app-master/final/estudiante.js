const mongoose=require('mongoose');
const{Schema}= mongoose;

const estudianteSchema = new Schema({
    nombre: {type: String, require:true},
    carrera: {type: String, require:true}
//    nota: {type: Float64Array, require:true}
});

module.exports=mongoose.model('estudiante', estudianteSchema);