const films = require("../data");
const response = require("../utils");

module.exports = async (req, res) => {
     const newFilm = await films.create();
        response(res, 201, newFilm);
    }

