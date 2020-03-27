export class HttpError extends Error {
    constructor(
        public statusCode: number,
        public message: string,
        public error?: any | null
    ) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.error = error || null;
    }
}
