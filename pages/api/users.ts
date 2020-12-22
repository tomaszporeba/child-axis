import {NextApiRequest, NextApiResponse} from "next";
import {Highlight, Event} from "../../models";

async function getUsers(req: NextApiRequest, res: NextApiResponse) {
    // const newUser = await Event.create({
    //     name: "Johnny",
    //     description: "John"
    // });


    const users = await Event.findAll({
        include: [
            {model: Highlight, as: 'highlights'}
        ]
    });


    // const users = await Highlight.findAll();
    // const users = await Event.findAll();
    res.json(users);
}
export default getUsers;