import {Highlight} from "./highlight";
import {Event} from "./event";
import {User} from "./user";

Event.Highlights = Event.hasMany(Highlight, {
    sourceKey: "id",
    foreignKey: {
        name: "eventId"
    },
    as: "highlights", // this determines the name in `associations`!
});

Highlight.Event = Highlight.belongsTo(Event, {
    onDelete: 'cascade',
    targetKey: 'id',
    foreignKey: {
        name: 'eventId',
    }
});

export { Event, Highlight, User}