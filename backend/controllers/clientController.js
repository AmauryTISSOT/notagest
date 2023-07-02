const mongoose = require("mongoose");
const clientModel = require("../models/clientModel");

// get all clients
const getAllClients = async (req, res) => {
    try {
        // return all the clients and sort them by date (last to first)
        const client = await clientModel.find({}).sort({ createAt: -1 });
        res.status(200).json(client);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// get a single client
const getSingleClient = async (req, res) => {
    // get the id from the req params (/:id)
    const { id } = req.params;

    // check if the id is mongoDB compliant
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such client" });
    }

    const client = await clientModel.findById(id);

    if (!client) {
        return res.status(404).json({ error: "No such client" });
    }

    return res.status(200).json(client);
};

// create a new client
// eslint-disable-next-line consistent-return
const createClient = async (req, res) => {
    const { type, name, status } = req.body;

    // check if the fields are completed
    const emptyFields = [];

    if (!type) {
        emptyFields.push('type');
    }
    if (!name) {
        emptyFields.push('name');
    }
    if (!status) {
        emptyFields.push('status');
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields });
    }

    // add doc to db
    try {
        const client = await clientModel.create({ type, name, status });
        res.status(200).json(client);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// delete client
const deleteClient = async (req, res) => {
    const { id } = req.params;

    // check if the id is mongoDB compliant
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such client" });
    }
    // in mongoDB id key = _id
    const client = await clientModel.findOneAndDelete({ _id: id });

    if (!client) {
        return res.status(404).json({ error: "No such client" });
    }

    return res.status(200).json(client);
};

// update client
// eslint-disable-next-line consistent-return
const updateClient = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such client" });
    }
    // in mongoDB id key = _id
    const client = await clientModel.findOneAndUpdate({ _id: id }, {
        ...req.body
    });
    if (!client) {
        return res.status(404).json({ error: "No such client" });
    }

    res.status(200).json(client);
};

module.exports = {
    getAllClients,
    getSingleClient,
    createClient,
    deleteClient,
    updateClient
};