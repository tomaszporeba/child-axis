import {DataTypes, Optional} from "sequelize";
import db from './initialization'

const {
    Model
} = require('sequelize');

const sequelize = db.sequelize;

interface HighlightAttributes {
    id: number;
    name: string;
    description: string;
}

// Some attributes are optional in `User.build` and `User.create` calls
interface HighlightCreationAttributes extends Optional<HighlightAttributes, "id"> {
}

export const Highlight = sequelize.define<HighlightCreationAttributes>("highlight", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
    },
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    eventId: {
        type: DataTypes.INTEGER,
    },
});

