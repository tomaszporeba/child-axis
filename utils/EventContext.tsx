import {createContext, useReducer} from 'react';

const initialState = { events: []};

interface GlobalState {
    events: object[];
}

interface Action<T, R> {
    payload: T;
    type: R;
}

export enum Events {
    GET_USERS = 'GET_USERS'
}

const reducer = (state: GlobalState, action: Action<object[], Events>) => {
    switch (action.type) {
        case Events.GET_USERS:
            return {...state, events: action.payload};
        default:
            return state;
    }
};

export const EventContext = createContext({state:{}, dispatch: (action: Action<object[], Events>) => {}});


export function EventContextProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <EventContext.Provider value={{ state, dispatch }}>{props.children}</EventContext.Provider>
}