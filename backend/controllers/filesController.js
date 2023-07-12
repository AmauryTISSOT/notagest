const mongoose = require("mongoose");
const filesModel = require("../models/filesModel");

// get all files
const getAllFiles = async (req, res) => {
    try {
        // return all the files and sort them by date (last to first)
        const files = await filesModel.find({}).sort({ createAt: -1 });
        res.status(200).json(files);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// get a single file
const getSingleFile = async (req, res) => {
    // get the id from the req params (/:id)
    const { id } = req.params;

    // check if the id is mongoDB compliant
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such file" });
    }

    const files = await filesModel.findById(id);

    if (!files) {
        return res.status(404).json({ error: "No such file" });
    }

    return res.status(200).json(files);
};

// create a new file
// eslint-disable-next-line consistent-return
const createFile = async (req, res) => {
    const { type, name, status, features } = req.body;

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
        const files = await filesModel.create({ type, name, status, features });
        res.status(200).json(files);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// delete file
const deleteFile = async (req, res) => {
    const { id } = req.params;

    // check if the id is mongoDB compliant
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such files" });
    }
    // in mongoDB id key = _id
    const files = await filesModel.findOneAndDelete({ _id: id });

    if (!files) {
        return res.status(404).json({ error: "No such files" });
    }

    return res.status(200).json(files);
};

// update file
// eslint-disable-next-line consistent-return
const updateFile = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such files" });
    }
    // in mongoDB id key = _id
    const files = await filesModel.findOneAndUpdate({ _id: id }, {
        ...req.body
    });
    if (!files) {
        return res.status(404).json({ error: "No such files" });
    }

    res.status(200).json(files);
};

module.exports = {
    getAllFiles,
    getSingleFile,
    createFile,
    deleteFile,
    updateFile
};