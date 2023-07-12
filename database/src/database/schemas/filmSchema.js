const { Schema } = require("mongoose");


const filmSchema = new Schema({
    _id: String,
    title: String,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: Date,
    characters: [{type:String, ref: "Character"}],
    planets: [{type: String, ref:"Planet"}]
})

filmSchema.statics.list = async function(){ //no puedo ser una arrow function porque sino no podemos usar el this
    return await this.find()
    .populate("characters" , ["_id" , "name"])
    .populate("planets", ["_id", "name"]);
  }
  
  filmSchema.statics.get = async function (id) {
    return await this.findById(id)
     .populate("characters" , ["_id" , "name"])
     .populate("planets", ["_id", "name"]);
}

filmSchema.statics.insert = async function(film){
   return await this.create(film)
}



module.exports= filmSchema;

