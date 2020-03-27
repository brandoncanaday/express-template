export function setEnvironment(config: { [key: string]: string } = {}) {
    for (const key of Object.keys(config)) {
        process.env[key.toUpperCase()] = config[key];
    }
}
