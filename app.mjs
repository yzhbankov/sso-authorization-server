import * as RestAPI from './app/api/rest-api/app.mjs';
import * as API     from './app/api/index.mjs';
import Logger       from './app/system/Logger.mjs';


const logger = new Logger();

API.setLogger(logger);

RestAPI.start({
    serverPort: 3000
});

process.on('SIGTERM', async () => {
    logger.info('[App] SIGTERM signal catched');

    await exit();
});

process.on('SIGINT', async () => {
    logger.info('[App] SIGINT signal catched');

    await exit();
});

async function exit() {
    await RestAPI.stop();

    logger.info('[App] Exit');
    process.exit(0);
}
