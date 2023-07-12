//const characters = require("./characters.json");
const axios = require('axios');

module.exports = {
    list: async ()=>{
        console.log("hola")
        const characters = await axios.get("http://database:8004/Character")
        return characters.data
    },

    create:async ()=>{
        throw Error("error en la BDD al crear personaje")
    }
}