import { makeRouterHandler } from '../../../../utils/useCaseRunner.mjs';
import Show from '../../../../use-cases/v1/users/Show.mjs';

export default {
    show: makeRouterHandler(Show, req => ({ id: req.params.id })),
    showAll: makeRouterHandler(Show)
}