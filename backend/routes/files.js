const express = require("express");
const { createFile, getAllFiles, getSingleFile, deleteFile, updateFile } = require("../controllers/filesController");

const fileRouter = express.Router();

// GET all files
fileRouter.get("/", getAllFiles);

// GET single file
fileRouter.get("/:id", getSingleFile);

// POST a new file
fileRouter.post("/", createFile);

// DELETE a file
fileRouter.delete("/:id", deleteFile);

// UPDATE a file
fileRouter.patch("/:id", updateFile);

module.exports = fileRouter;