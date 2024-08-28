const express = require("express");
const app = express();
const User = require("../models/User");
const admin = require("firebase-admin");
// const serviceAccount = require("./uofrcybersecurity-firebase-adminsdk-ji11e-b4eb398279.json");
const Events = require("../models/Events");
require("dotenv").config();

const serviceAccount =
{
  "type": "service_account",
  "project_id": "uofrcybersecurity",
  "private_key_id": process.env.private_key_id,
  "private_key": process.env.private_key,
  "client_email": process.env.client_email,
  "client_id": process.env.client_id,
  "auth_uri": process.env.auth_uri,
  "token_uri": process.env.token_uri,
  "auth_provider_x509_cert_url": process.env.auth_provider_x509_cert_url,
  "client_x509_cert_url": process.env.client_x509_cert_url,
  "universe_domain": process.env.universe_domain
}

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
  console.log(email);
  try {
    const result = await User.findOne({ email: email });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json("User not found!");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("Internal Server Error");
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
          console.error(err);
          res.status(500).json("Internal Server Error");
        }
      });
  } catch (err) {
    console.error(err);
  }
};

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Events.find();
    const filteredEvents = events.map((event) => {
      return {
        title: event.title,
        description: event.description,
        image: event.image,
        Date: event.Date,
        location: event.location,
        _id: event._id,
        active: event.active,
      };
    });
    res.status(200).json(filteredEvents);
  } catch (err) {
    console.error(err);
    res.status(500).json("Internal Server Error");
  }
}

exports.getEventById = async (req, res) => {
  const id = req.params.id;
  try {
    const event = await Events.findById(id);
    if (event) {
      res.status(200).json(event);
    } else {
      res.status(404).json("Event not found!");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("Internal Server Error");
  }
}

exports.addUserRegistrant = async (req, res) => {
  const { email, number, major, year, name, company } = req.body;
  const id = req.params.id;
  try {
    const event = await Events.findById(id);
    if (event) {
      const registrant = {
        email,
        number,
        major,
        year,
        name,
        company
      };
      event.registrants.push(registrant);
      await event.save();
      res.status(200).json("Registrant added successfully!");
    } else {
      res.status(404).json("Event not found!");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("Internal Server Error");
  }
}