import { Response } from 'node-fetch';

export function checkResponseStatus(res: Response): Response {
    if (res.ok) {
        // res.status >= 200 && res.status < 300
        return res;
    } else {
        throw new Error(res.statusText);
    }
}
