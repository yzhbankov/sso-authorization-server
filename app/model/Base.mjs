import Sequelize from 'sequelize';


export default class Base extends Sequelize.Model {
    static init(sequelize, options) {
        super.init(this.schema, { sequelize, ...options })
    }

    static async findById(id) {
        console.log(id);
        const entity = await this.findOne({ where: { id } });

        if (!entity) {
            throw new Error({
                message : `There is no ${this.name} with id = "${id}"`,
                field   : 'id'
            });
        }

        return entity;
    }

    static async findAllUsers() {
        const result = await this.findAll();

        if (!result) {
            throw Error({
                message: 'There is no users'
            })
        }

        return result;
    }

    static async save(user) {
        try {
            return await super.save(...user);
        } catch (err) {
            throw err;
        }
    }
}