const express = require("express");
const app = express();
const User = require("../models/User");
const admin = require("firebase-admin");
const serviceAccount = require("./uofrcybersecurity-firebase-adminsdk-ji11e-b4eb398279.json");
const Events = require("../models/Events");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

exports.authMiddleware = (req, res, next) => {
  const idToken = req.headers.authorization; // Use req.headers.authorization

  if (!idToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      req.user = decodedToken;
      next();
    })
    .catch((err) => {
      console.error(err.message);
      res.status(401).json({ message: "Unauthorized" });
    });
};

exports.getUserByEmail = async (req, res) => {
  const email = req.headers.email;
  try {
    const result = await User.findOne({ email: email });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json("User not found!");
    }
  } catch (err) {
    console.error(err);
  }
};

exports.addUsers = async (req, res) => {
  try {
    const { name, email, image, major, year } = req.body;
    const result = await User.create({
      name,
      email,
      image,
      major,
      year,
    })
      .then((result) => {
        res.status(200).json("Great Success!");
      })
      .catch((err) => {
        if (
          err.code === 11000 &&
          err.keyPattern &&
          err.keyPattern.email === 1
        ) {
          res.status(409).json("User already exists!");
        } else {
          res.status(500).json("Internal Server Error");
        }
      });
  } catch (err) {
    console.error(err);
  }
};

exports.getEventById = async(req, res) => {
  const id = req.params.id;
  try {
    const event = await Events.findById(id);
    if (event) {
      res.status(200).json(event);
    } else {
      res.status(404).json("Event not found!");
    }
  } catch(err){
    console.error(err);
    res.status(500).json("Internal Server Error");
  }
}

