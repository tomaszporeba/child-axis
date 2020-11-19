import {createContext, Dispatch, useReducer} from 'react';

const initialState = { events: []};

interface GlobalState {
    events: object[];
}

interface Action<T, R> {
    payload: T;
    type: R;
}

export enum Events {
    GET_EVENTS = 'GET_EVENTS',
    ADD_EVENT = 'ADD_EVENT'
}

const reducer = (state: GlobalState, action: Action<object[],Events>) => {
    switch (action.type) {
        case Events.GET_EVENTS:
            return {...state, events: action.payload};
        case Events.ADD_EVENT:
            return {...state, events: {...state.events, ...action.payload}};
        default:
            return state;
    }
};

export const EventContext = createContext<{state: GlobalState, dispatch: Dispatch<Action<object[], Events>>}>({state: initialState, dispatch: () => null});


export function EventContextProvider({children}: JSX.ElementChildrenAttribute): JSX.Element {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <EventContext.Provider value={{ state, dispatch }}>{ children }</EventContext.Provider>
}