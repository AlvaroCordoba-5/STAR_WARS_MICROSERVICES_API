const {catchedAsync} = require("../utils");

module.exports ={
    getplanets: catchedAsync(require("./getPlanets")),
    createplanets: catchedAsync(require("./createplanets")),
};