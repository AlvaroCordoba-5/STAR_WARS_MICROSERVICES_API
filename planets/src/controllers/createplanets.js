const planets = require("../data");
const response = require("../utils");

module.exports = async (req, res) => {
     const newPlanets = await planets.create();
        response(res, 201, newPlanets);
    }

