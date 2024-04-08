import { Router } from 'express';

import parserRoutes from './logparser.routes';

const routes = Router();

routes.use('/log', parserRoutes);

export default routes;