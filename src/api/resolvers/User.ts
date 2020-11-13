import {Query, Resolver} from "type-graphql";
import {User as UserModel} from "../../../models/users";


@Resolver(_of => User)
export class User {
    @Query(() => [User])
    async returnAllUsers(){
        const users = await UserModel.findAll();
        return users.map(user => ({
            id: user.dataValues.id,
            firstName: user.dataValues.firstName,
            password: user.dataValues.password
        }))
    };
}