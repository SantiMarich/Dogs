const { Router } = require("express");
const dogsRouter = require("./dogsRoutes");
const temperamentsRouter = require("./temperamentsRoutes");
const mainRouter = Router();

mainRouter.use("/dogs", dogsRouter);
mainRouter.use("/temperaments", temperamentsRouter);

const router = mainRouter;

module.exports = router;
