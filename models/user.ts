'use strict';
import { DataTypes, Optional } from "sequelize";
import db from './initialization';

const {
    Model
} = require('sequelize');

const sequelize = db.sequelize;

export interface UserAttributes {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string
}

// Some attributes are optional in `User.build` and `User.create` calls
export interface UserCreationAttributes extends Optional<UserAttributes, "id"> {
}

export const User = sequelize.define<UserCreationAttributes>("user", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    firstName: {
        type: DataTypes.STRING,
    },
    lastName: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
});