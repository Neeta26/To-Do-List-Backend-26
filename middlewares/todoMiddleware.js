const AppError = require("../helpers/appErrorClass");
const sendErrorMessage = require("../helpers/sendError");
const sendError = require("../helpers/sendError");
const sendResponse = require("../helpers/sendResponse");

const verifyPostRequest = (req, res, next) => {
  const requiredProperties = ["taskName"];
  let result = requiredProperties.every((key) => {
    return req.body[key];
  });
  if (!result) {
    sendErrorMessage(
      new AppError(400, "Unsuccessful", "Req body is not valid"),
      req,
      res
    );
  } else {
    next();
  }
};

module.exports.verifyPostRequest = verifyPostRequest;
