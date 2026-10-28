import { Router } from "express";
import { ViajesController } from "./viajes.controller";

export class ViajesRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new ViajesController();

    router.get("/", controller.getAllViajes);

    return router;
  }
}
