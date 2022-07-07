const errorHandler = (err, req, res, next) => {
  let customError = {
    // set default
    statusCode: err.statusCode || 500,
    msg: err.message || "Something went wrong, try again later",
  };

  if (err.parent.errno === 1062) {
    customError.msg = "User Already Exists";
    customError.statusCode = 400;
  }

  return res.status(customError.statusCode).json({ msg: customError.msg });

  // return res.status(customError.statusCode).json({ err });
};

module.exports = errorHandler;
