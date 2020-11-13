import {DataTypes, Optional} from "sequelize";
import db from './index'

const {
  Model
} = require('sequelize');

const sequelize = db.sequelize;

interface UserAttributes {
  id: number;
  firstName: string;
  password: string;
}

// Some attributes are optional in `User.build` and `User.create` calls
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

export class User extends Model<UserAttributes, UserCreationAttributes>
    implements UserAttributes {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public firstName!: string;
  public password!: string | null; // for nullable fields

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  }

User.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      password: {
        type: new DataTypes.STRING(128),
        allowNull: true,
      },
    },
    {
      tableName: "users",
      sequelize, // passing the `sequelize` instance is required
    }
);