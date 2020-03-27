import {
    ErrorRequestHandler,
    NextFunction,
    Request,
    Response,
    RequestHandler,
} from 'express';
import { HttpError } from '../models/http-error';

export class AppController {
    public static handle404(): RequestHandler {
        return (req: Request, res: Response) => {
            res.status(404).send(`The route ${req.path} does not exist!`);
        };
    }

    public static handleError(): ErrorRequestHandler {
        return (
            err: HttpError,
            req: Request,
            res: Response,
            next: NextFunction
        ) => {
            const status = err.statusCode || 500;
            const message =
                err.message ||
                `It's not you. It's us. We're having some problems.`;

            res.status(status).send(message);
        };
    }
}
