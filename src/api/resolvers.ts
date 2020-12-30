import { User, Event, Highlight } from "../../models";
import { hash, compare } from 'bcrypt';
import { UserCreationAttributes } from '../../models/user';
import { sign } from 'jsonwebtoken';
import cookie from 'cookie';


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
    // TODO types of arguments
    Mutation: {
        async addEvent(root, args: {event: Event}, context, info) {
            return Event.create(args.event, {include: [{association: Event.Highlights, as: 'highlights'}]});
        },
        async addUser(root, args: {user: UserCreationAttributes}, context, info) {
            const password = await hash(args.user.password, 10);
            const user = {...args.user, password}
            return User.create(user);
        },
        async login(root, {inputs: { email, password}}: {inputs: {email: string, password: string}}, context, info) {
            const user = await User.findAll({where: {email}});
            const match = await compare(password, user[0].password);
            if (match) {
                const claims = {sub: user[0].id}
                const jwt = sign(claims, '8fc86cac-4912-11eb-b378-0242ac130002', { expiresIn: '1h'})
                context.res.setHeader('Set-Cookie', cookie.serialize('token', jwt, {
                    httpOnly: true,
                    sameSite: 'strict'
                }))
                return { logged: true};
            }
        }
    }
}