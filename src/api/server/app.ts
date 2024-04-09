import cors from 'cors';
import express from 'express';
import 'express-async-errors';

import routes from '../routes';
import errorHandler from '../errors/Handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errorHandler);

export default app;