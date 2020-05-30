import * as UUID from 'uuid';
import Base from '../../Base.mjs';
import User from '../../../model/User.mjs';

export default class Create extends Base {
    static validationRules = {
        firstName: ['required'],
        lastName: ['required'],
        status: {one_of: ['ACTIVE', 'BLOCKED', 'PENDING']},
        email: ['required', 'email'],
        role: ['required'],
        password: ['required']
    }

    async execute(params) {
        try {
            const id = UUID.v4();
            const now = new Date();

            await User.create({
                ...params,
                id,
                createdAt: now,
                updatedAt: now,
            });

            const user = await User.findById(id);

            return { users: [user] };
        } catch (err) {
            console.error(err);
            throw Error(err);
        }
    }
}
