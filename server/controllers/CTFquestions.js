const express = require("express");
require("dotenv").config();

exports.checkFlagForDBQuestion = async (req, res) => {
    const {flag} = req.body;

    if (!flag) {
        return res.status(400).json({message: "Flag is required!"});
    }

    const actualFlag = process.env.DB_QUESTION_FLAG;
    if (flag === actualFlag) {
        res.status(200).json({message: "Correct Flag!"});
    } else {
        res.status(400).json({message: "Incorrect Flag!, try harder my guy"});
    }
}

exports.checkFlagForRecipieQuestion = async(req, res) => {
    const {flag} = req.body;

    if (!flag) {
        return res.status(400).json({message: "Flag is required!"});
    }

    const actualFlag = process.env.RECIPIE_QUESTION_FLAG;
    if (flag === actualFlag) {
        res.status(200).json({message: "Correct Flag!"});
    } else {
        res.status(400).json({message: "Incorrect Flag!, it's just a recipie, you can do it!"});
    }
}