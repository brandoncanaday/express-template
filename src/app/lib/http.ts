import fetch, { Response } from 'node-fetch';
import { checkResponseStatus } from './helpers';

export class Http {
    public static get(url: string): Promise<Response> {
        return fetch(url)
            .then(checkResponseStatus)
            .then((res) => res.json());
    }

    public static post(url: string, body: any = {}): Promise<Response> {
        return fetch(url, {
            method: 'post',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(checkResponseStatus)
            .then((res) => res.json());
    }
}
