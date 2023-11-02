const express = require("express");

const router = express.Router();
//internal imports
const { getUsers } = require("../controllers/usersController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
//users page
router.get("/", decorateHtmlResponse("Users"), getUsers);

module.exports = router;
