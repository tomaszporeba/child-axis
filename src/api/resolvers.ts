import {User} from "../../models/users";

export const resolvers = {
    Query: {
        async users() {

            const users = await User.findAll();
            return users.map(user => ({
                id: user.dataValues.id,
                firstName: user.dataValues.firstName,
                password: user.dataValues.password
            }))
        },
    },
}