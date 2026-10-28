import { pool } from "../../../config/database";
import { Viaje } from "../../../domain/interfaces/viaje.interface";

export class ViajesService {
  public async getAllViajes(): Promise<Viaje[]> {
    const result = await pool.query(
      "SELECT id_viaje, hora, fecha FROM viajes ORDER BY id_viaje;"
    );
    return result.rows;
  }
}
