import LIVR from 'livr';


export default class UseCaseBase {
    async run(params) {
        const cleanParams = await this.validate(params);
        return this.execute(cleanParams);
    }

    async validate(params) {
        try {
            const validator = new LIVR.Validator(this.constructor.validationRules);
            return validator.validate(params);
        } catch(err) {
            console.error(err);
        }
    }
}
