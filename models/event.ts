import {DataTypes, Optional} from "sequelize";
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
interface EventCreationAttributes extends Optional<EventAttributes, "id"> {}

export class Event extends Model<EventAttributes, EventCreationAttributes>
    implements EventAttributes {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public name!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Event.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      }
    },
    {
      tableName: "events",
      sequelize, // passing the `sequelize` instance is required
    }
);