import express from "express";

import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

const routes = express();
const pointsController = new PointsController();
const itemsController = new ItemsController();

// index = listagem vários
// show = exibir um único registro
// create = store
// update
// delete
routes.get("/items", itemsController.index);

routes.post("/points", pointsController.create);
routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);

export default routes;