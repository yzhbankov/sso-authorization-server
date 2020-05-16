import express from 'express';
import logger from '../logger.mjs';

const app = express();

let server;

export async function start({ serverPort }) {
    server =  app.listen(serverPort, () => {
        logger.info('Server listen on port: ', serverPort);
    })
}

export async function stop() {
    if (!server) return;

    await server.close();
    logger.info('Server closed');
}

export default app;
