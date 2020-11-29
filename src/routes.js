import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import DirectorController from './app/controllers/DirectorController';
import MovieController from './app/controllers/MovieController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/directors', DirectorController.store);
routes.get('/directors', DirectorController.index);

routes.post('/movies', upload.single('file'), MovieController.store);
routes.get('/movies', MovieController.index);
routes.put('/movies/:id', upload.single('file'), MovieController.update);
routes.delete('/movies/:id', MovieController.delete);

export default routes;
