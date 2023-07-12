const {catchedAsync} = require("../utils");

module.exports ={
    getfilms: catchedAsync(require("./getFilms")),
    createfilms: catchedAsync(require("./createfilms")),
};