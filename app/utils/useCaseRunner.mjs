import logger from '../api/logger.mjs';


async function runUseCase(UseCase, { params }) {
    function logRequest(type, result, startTime) {
        logger[type]({
            useCase: UseCase.name,
            startTime: startTime,
            deltaTime: Date.now() - startTime,
            params,
            result
        });
    }

    const startTime = new Date();

    try {
        const result = await new UseCase().run(params);

        logRequest('info', result, startTime);

        return result;
    } catch (err) {
        logRequest('error', err, startTime);

        throw err;
    }
}

export function makeRouterHandler(UseCaseClass, mapToParams, mapToResponse) {
    return async function routerHandler(req, res) {
        try {
            const params = mapToParams(req);

            const result = await runUseCase(UseCaseClass, { params });

            if (mapToResponse) {
                mapToResponse(result, res);
            } else {
                res.json(result);
            }
        } catch (err) {
            logger.error(err);
        }
    }
}
