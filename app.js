const cookieParser = require("cookie-parser");
const express = require("express");
const { default: mongoose } = require("mongoose");
const path = require("path");
require("dotenv").config();

// internal import
const {
  notFoundHandaler,
  errorHandaler,
} = require("./middlewares/common/errorHandaler.js");

const loginRouter = require("./routers/loginRouter.js");
const usersRouter = require("./routers/usersRouter.js");
const inboxRouter = require("./routers/inboxRouter.js");

const app = express();

//database connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => console.log(err));

// requiest parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs");

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//parse cookies
app.use(cookieParser(process.env.COKKIE_SECRET));

//routing setup
app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);

//404 not found handaler
app.use(notFoundHandaler);

//common error handaler
app.use(errorHandaler);

//app listener
app.listen(process.env.PORT, () => {
  console.log(`app is listening to port ${process.env.PORT}`);
});
