const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    Date: {
        type: Date,
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
    },
    registrants: [{
        email: {
            type: String,
            required: true
        },
        number: {
            type: String,
        },
        major: {
            type: String,
        },
        year: {
            type: Number,
        },
        name: {
            type: String,
            required: true
        },
        company: {
            type: String,
        }
    }]
}, {
    timestamps: true,
});

module.exports = mongoose.model("Event", eventSchema);