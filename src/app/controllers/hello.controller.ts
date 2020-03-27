import { Request, Response, RequestHandler } from 'express';

export class HelloController {
    public static world(): RequestHandler {
        return (req: Request, res: Response) => {
            res.json(`Hello world!`);
        };
    }
}
