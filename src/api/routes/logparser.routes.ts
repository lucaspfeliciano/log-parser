import { Router } from 'express';

import LogParserController from '../controllers/LogParserController';

const ordersRouter = Router();
const ordersController = new LogParserController();

ordersRouter.post('/parse', ordersController.parse);

export default ordersRouter;