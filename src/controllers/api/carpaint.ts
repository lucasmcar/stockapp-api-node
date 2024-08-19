import { Request, Response } from 'express';
import { CarPaints } from '../../models/carpaint';
import con from '../../../config/connection';

const TABLE = 'carpaints';

export class CarPaintsController {

    // Método para listar todos os registros de tintas
    public verTodos(req: Request, res: Response): void {
        con.query(`SELECT * FROM ${TABLE}`, (err, results) => {
            if (err) {
                console.error('Error executing query:', err);
                res.status(500).json({ error: 'An error occurred' });
                return;
            }
            res.status(200).json(results);
        });
    }

    // Método para salvar um novo registro de tinta
    public salvar(req: Request, res: Response): void {
        const { colorGroup, colorName, code, quantity, brand } = req.body;

        const carpaint: CarPaints = {
            colorGroup,
            colorName,
            code,
            quantity,
            brand,
            createdAt: new Date()
        };

        con.query(
            `INSERT INTO ${TABLE} (colorGroup, colorName, code, quantity, brand, createdAt) VALUES (?, ?, ?, ?, ?, ?);`,
            [
                carpaint.colorGroup,
                carpaint.colorName,
                carpaint.code,
                carpaint.quantity,
                carpaint.brand,
                carpaint.createdAt
            ],
            (err: any, result: any) => {
                if (err) {
                    console.error('Error executing query:', err);
                    res.status(500).json({ error: 'An error occurred' });
                    return;
                }
                console.log(result);
                res.status(200).json(result);
            }
        );
    }
}