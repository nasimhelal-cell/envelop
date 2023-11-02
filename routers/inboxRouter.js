const express = require("express");

const router = express.Router();
//internal imports
const { getInbox } = require("../controllers/inboxController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
//inbox page
router.get("/", decorateHtmlResponse("Inbox"), getInbox);

module.exports = router;
