import { Router } from "express";
import { ParyRoutes } from "./modules/pary/pary.routes";
import { ViajesRoutes } from "./modules/viajes/viajes.routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    const apiRouter = Router();

    apiRouter.use("/pary", ParyRoutes.routes);
    apiRouter.use("/viajes", ViajesRoutes.routes);
    router.use("/api", apiRouter);

    return router;
  }
}
