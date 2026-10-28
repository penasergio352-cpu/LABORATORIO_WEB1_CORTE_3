import { pool } from "../../../config/database";
import { Pary, Promotor } from "../../../domain/interfaces/pary.interface";

export class ParyService {
  public async getAllPary(): Promise<Pary[]> {
    const result = await pool.query(
      "SELECT id, lugar, nombre FROM pary ORDER BY id;"
    );
    return result.rows;
  }

  public async getAllPromotores(): Promise<Promotor[]> {
    const result = await pool.query(
      `SELECT id, nombre, fecha_nacimiento, promedio::double precision AS promedio
       FROM promotor
       ORDER BY id;`
    );
    return result.rows;
  }
}
