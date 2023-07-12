const {Router} = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controllers.getfilms);
router.post("/",middlewares.filmValidation, controllers.createfilms);

module.exports = router;
