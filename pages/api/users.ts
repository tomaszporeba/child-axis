import {NextApiRequest, NextApiResponse} from "next";
import {User} from "../../models/users";

async function getUsers(req: NextApiRequest, res: NextApiResponse) {
    const newUser = await User.create({
        name: "Johnny",
        firstName: "John",
            password: "dupa"
    });
    const users = await User.findAll();
    res.json(users);
}
export default getUsers;