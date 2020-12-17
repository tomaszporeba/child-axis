import {User} from "../../models/users";
import { Event, Highlight } from "../../models";


export const resolvers = {
    Query: {
        async users() {
            const users = await User.findAll();
            return users.map(user => user.get({plain: true}))
        },
        async events() {
            const events = (await Event.findAll({
                include: [
                    {model: Highlight, as: 'highlights'}
                ]
            })).map(event => event.get({plain: true}));
            return events;
        }
    },
}