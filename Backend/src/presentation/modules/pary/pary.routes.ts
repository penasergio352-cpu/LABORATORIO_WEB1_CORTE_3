import { Router } from "express";
import { ParyController } from "./pary.controller";

export class ParyRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new ParyController();

    router.get("/", controller.getAllPary);
    router.get("/promotores", controller.getAllPromotores);

    return router;
  }
}
