import { DataTypes, Optional } from "sequelize";
import db from './initialization'

const {
    Model
} = require('sequelize');

const sequelize = db.sequelize;

interface EventAttributes {
    id: number;
    name: string;
}

// Some attributes are optional in `User.build` and `User.create` calls
interface EventCreationAttributes extends Optional<EventAttributes, "id"> {
}

export const Event = sequelize.define<EventCreationAttributes>("event", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
    },
    name: {
        type: DataTypes.STRING,
    },
});