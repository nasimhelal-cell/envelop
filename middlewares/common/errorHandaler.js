// 404 not found handaler
const createError = require("http-errors");

function notFoundHandaler(req, res, next) {
  next(createError(404, "Your requested content is not found"));
}

//default error handaler

function errorHandaler(err, req, res, next) {
  res.locals.error =
    process.env.NODE_ENV === "development" ? err : { message: err.message };

  res.status(err.status || 500);

  if (!res.locals.html) {
    //html response
    res.render("error", {
      title: "Error page",
    });
  } else {
    //json response
    res.json(res.locals.error);
  }
}

module.exports = {
  notFoundHandaler,
  errorHandaler,
};
