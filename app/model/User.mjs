import Sequelize    from 'sequelize';
import Base         from './Base.mjs';


const DT = Sequelize.DataTypes;

export default class User extends Base {
    static schema = {
        id:         { type: DT.UUID, defaultValue: DT.UUIDV4, primaryKey: true },
        firstName:  { type: DT.STRING, defaultValue: '' },
        lastName:   { type: DT.STRING, defaultValue: '' },
        status:     { type: DT.ENUM('ACTIVE', 'BLOCKED', 'PENDING'), defaultValue: 'ACTIVE' },
        email:      { type: DT.STRING, allowNull: false, unique: true },
        createdAt:  { type: DT.DATE, defaultValue: new Date() },
        removedAt:  { type: DT.DATE, defaultValue: null },
        updatedAt:  { type: DT.DATE, defaultValue: new Date() },
        role:       { type: DT.STRING, defaultValue: '' },
        password:   { type: DT.STRING, defaultValue: '' },
    }
}