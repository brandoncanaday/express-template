import * as functions from 'firebase-functions';
import express from 'express';
import { setEnvironment } from './helpers';
setEnvironment(functions.config().env);
import { app } from '../app';

const api = express();

api.use('/api', app);

export const main = functions.https.onRequest(api);
