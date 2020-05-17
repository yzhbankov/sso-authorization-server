import Base from '../../Base.mjs';


export default class Show extends Base {
    static validationRules = {
        id: ['required']
    }

    async execute({ id }) {
        try {
            return new Promise((resolve, reject) => {
                resolve({ name: 'User name', id });
            })
        } catch(err) {
            throw Error(err);
        }
    }
}