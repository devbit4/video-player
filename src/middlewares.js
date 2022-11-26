import multer from "multer";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "player";
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.loggedInUser = req.session.user;
  next();
};

export const videoUpload = multer({
  dest: "uploads/videos/",
  limits: {
    fileSize: 10000000,
  },
});