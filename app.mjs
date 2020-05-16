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

process.on('unhandledRejection', error => {
    console.error(error);

    logger.fatal({
        type  : 'UnhandledRejection',
        error : error.stack
    });
});

process.on('uncaughtException', error => {
    console.error(error);

    logger.fatal({
        type  : 'UncaughtException',
        error : error.stack
    });
});

async function exit() {
    await RestAPI.stop();

    logger.info('[App] Exit');
    process.exit(0);
}