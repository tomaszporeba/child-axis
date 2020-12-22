import { Event, Highlight } from "../../models";


export const resolvers = {
    Query: {
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
            const event = await Event.create(args.event, {include: [{association: Event.Highlights, as: 'highlights'}]});
            // await Promise.all(event.highlights.map(async item => await item.setEvent(event)))
            // console.log('events: \n', JSON.stringify(event))
            return event;
        }
    }
}