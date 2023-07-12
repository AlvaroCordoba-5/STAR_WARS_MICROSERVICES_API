const {Router} = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controllers.getplanets);
router.post("/",middlewares.planetValidation, controllers.createplanets);

module.exports = router;
