const { Schema } = require("mongoose");

const characterSchema = new Schema({
    _id: String,
    name: String,
    height: String,
    mass: String,
   hair_color: String,
   skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
    homeworld: {type:String, ref: "Planet"}, //refencia al ID del planeta
    films: [{type: String, ref: "Film"}]  //ARRAY DE REFERENCIAS A PELICULAS
}) 

characterSchema.statics.list = async function(){ //no puedo ser una arrow function porque sino no podemos usar el this
  return await this.find()
  .populate("homeworld" , ["_id" , "name"])
  .populate("films", ["_id", "title"]);
}

characterSchema.statics.get = async function (id) {
    return await this.findById(id)
     .populate("homeworld" , ["_id" , "name"])
     .populate("films", ["_id", "title"]);
}

characterSchema.statics.insert = async function(character){
   return await this.create(character)
}


module.exports = characterSchema;