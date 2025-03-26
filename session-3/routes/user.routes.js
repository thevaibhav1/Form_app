const router = require("express").Router();
const { getUser, getUserById } = require("../controller/user.controler");

router.get("/", getUser);
router.get("/:uuid", getUserById);

module.exports = router;
