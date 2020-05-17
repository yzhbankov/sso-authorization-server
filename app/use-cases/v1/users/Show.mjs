import Base from '../../Base.mjs';


export default class Show extends Base {
    static validationRules = {
        id: ['required']
    }

    async execute({ id }) {
        try {
            if (!id) {
                return new Promise((resolve, reject) => {
                    resolve({ users: [ { name: 'User name', id: 1 }, { name: 'User name', id: 2 } ]});
                })
            }
            return new Promise((resolve, reject) => {
                resolve({ name: 'User name', id });
            })
        } catch(err) {
            throw Error(err);
        }
    }
}