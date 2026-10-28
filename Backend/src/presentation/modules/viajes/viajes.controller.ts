import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { ViajesService } from "./viajes.service";

export class ViajesController {
  private readonly viajesService = new ViajesService();

  getAllViajes = (_req: Request, res: Response): void => {
    this.viajesService
      .getAllViajes()
      .then((viajes) => res.status(200).json(viajes))
      .catch((error: unknown) => HandleError.error(error, res));
  };
}
