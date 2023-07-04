const mongoose = require("mongoose");

const { Schema } = mongoose;

// schema who describe the structure of file database

const filesSchema = new Schema({
    type: {
        type: String,
        enum: ['vente', 'succession', 'modifEDD'],
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['inProgress', 'hold', 'closed'],
        required: true,
    },
    features: {
        type: [String],
        required: false,
        default: [],
    },
},
    { timestamps: true });

// Create model
const filesModel = mongoose.model('filesModel', filesSchema);

module.exports = filesModel;