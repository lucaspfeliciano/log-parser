import { Router } from 'express';

import LogParserController from '../controllers/LogParserController';

const logParserRoutes = Router();
const logParserController = new LogParserController();

logParserRoutes.post('/parse', logParserController.parse);

export default logParserRoutes;