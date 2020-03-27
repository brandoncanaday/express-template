import * as dotenv from 'dotenv';
dotenv.config();
import { app } from './app';

const port = 5000;

app.listen(port, () => console.log(`Server listening on port ${port}!`));
