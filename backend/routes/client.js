const express = require("express");
const { createClient, getAllClients, getSingleClient, deleteClient, updateClient } = require("../controllers/clientController");

const clientRouter = express.Router();

// GET all clients
clientRouter.get("/", getAllClients);

// GET single client
clientRouter.get("/:id", getSingleClient);

// POST a new client
clientRouter.post("/", createClient);

// DELETE a client
clientRouter.delete("/:id", deleteClient);

// UPDATE a client
clientRouter.patch("/:id", updateClient);

module.exports = clientRouter;