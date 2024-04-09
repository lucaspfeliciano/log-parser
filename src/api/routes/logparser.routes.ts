import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@shared/config/upload';

import LogParserController from '../controllers/LogParserController';

const upload = multer(uploadConfig);

const logParserRoutes = Router();
const logParserController = new LogParserController();

logParserRoutes.post('/parse', upload.single('file'), logParserController.parse);

export default logParserRoutes;