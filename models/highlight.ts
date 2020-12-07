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

export class Highlight extends Model<HighlightAttributes, HighlightCreationAttributes>
    implements HighlightAttributes {
    public id!: number; // Note that the `null assertion` `!` is required in strict mode.
    public name!: string;
    public description!: string;
    public eventId: number;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Highlight.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        description: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        eventId: {
            type: new DataTypes.INTEGER,
            allowNull: true,
        }
    },
    {
        tableName: "highlights",
        sequelize, // passing the `sequelize` instance is required
    }
);
