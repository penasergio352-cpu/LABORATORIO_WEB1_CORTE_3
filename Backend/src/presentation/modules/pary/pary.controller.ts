import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { ParyService } from "./pary.service";

export class ParyController {
  private readonly paryService = new ParyService();

  getAllPary = (_req: Request, res: Response): void => {
    this.paryService
      .getAllPary()
      .then((pary) => res.status(200).json(pary))
      .catch((error: unknown) => HandleError.error(error, res));
  };

  getAllPromotores = (_req: Request, res: Response): void => {
    this.paryService
      .getAllPromotores()
      .then((promotores) => res.status(200).json(promotores))
      .catch((error: unknown) => HandleError.error(error, res));
  };
}
