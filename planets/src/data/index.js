const planets = require("./planets.json");


module.exports = {
    list: async ()=>{
        return planets
    },

    create:async ()=>{
        throw Error("error en la BDD al crear planetas")
    }
}