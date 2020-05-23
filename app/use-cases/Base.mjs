import LIVR from 'livr';
import error from 'http-errors';

// todo: return error on validation error
export default class UseCaseBase {
    #validator = null;

    async run(params) {
        try {
            const cleanParams = await this.validate(params);
            if (cleanParams) {
                return this.execute(cleanParams);
            }
            const errors = this.#validator.getErrors()

            throw new Error({
                code: 'VALIDATION_ERROR',
                message: JSON.stringify(errors)
            })
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async validate(params) {
        try {
            this.#validator = new LIVR.Validator(this.constructor.validationRules);
            return this.#validator.validate(params);
        } catch(err) {
            throw err;
        }
    }
}
