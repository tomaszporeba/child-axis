import { User, Event, Highlight } from "../../models";


export const resolvers = {
    Query: {
        async users() {
            const users = await User.findAll().map(user => user.get({plain: true}))
            return users;
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
    Mutation: {
        async addEvent(root, args: {event: Event}, context, info) {
            return Event.create(args.event, {include: [{association: Event.Highlights, as: 'highlights'}]});
        },
        async addUser(root, args: {user: any}, context, info) {
            console.log('user: \n', JSON.stringify(args.user))
            return User.create(args.user);
        }
    }
}