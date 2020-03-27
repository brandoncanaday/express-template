import express from 'express';
import helmet from 'helmet';
// import cors from 'cors';

import { AppController } from './controllers';
import { routes } from './routes';

const app = express();

// app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use(AppController.handleError());
app.use(AppController.handle404());

export { app };
