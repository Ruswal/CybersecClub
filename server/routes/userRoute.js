const express = require("express");
const Router = express.Router();
const UserController = require("../controllers/UserController");
const CTFController = require("../controllers/CTFquestions");

Router.get(
  "/getuser",
  UserController.authMiddleware,
  UserController.getUserByEmail
);
Router.post(
  "/createuser",
  UserController.authMiddleware,
  UserController.addUsers
);

Router.get("/getevents", UserController.authMiddleware, UserController.getAllEvents);

Router.get("/getevents/:id", UserController.getEventById);

Router.put("/updateevent/:id", UserController.authMiddleware, UserController.addUserRegistrant);

Router.post("/checkflagForDBQuestion", CTFController.checkFlagForDBQuestion)
Router.post("/checkflagForRecipieQuestion", CTFController.checkFlagForRecipieQuestion)

const UserRoutes = Router;
module.exports = UserRoutes;
