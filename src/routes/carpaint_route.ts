import express from 'express';
import * as carPaintController from '../controllers/api/carpaint';


const router = express.Router();

router
    .route('/api/carpaint/save',)
    .post(carPaintController.salvar)

router
    .route('/list/carpaints')
    .get(carPaintController.verTodos)


export default router;