const { Router } = require("express");

const {
  getDogsHandler,
  getDogsIdHandler,
  postDogsHandler,
} = require("../handlers/dogsHandlers");

const dogsRouter = Router();

dogsRouter.get("/", getDogsHandler);

dogsRouter.get("/:id", getDogsIdHandler);

dogsRouter.post("/", postDogsHandler);

module.exports = dogsRouter;
