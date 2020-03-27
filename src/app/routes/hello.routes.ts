import express from 'express';
import { HelloController } from '../controllers';
const router = express.Router();

router.post('/world', HelloController.world());

export { router as helloRoutes };
