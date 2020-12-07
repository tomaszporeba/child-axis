import {Highlight} from "./highlight";
import {Event} from "./event";

Event.hasMany(Highlight, {
    sourceKey: "id",
    foreignKey: "eventId",
    as: "highlights", // this determines the name in `associations`!
});

// Highlight.belongsTo(Event, {foreignKey: 'eventId'});


export { Event, Highlight }