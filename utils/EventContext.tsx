import {createContext, Dispatch, useReducer} from 'react';

const initialState = { events: [], isSidebarOpen: false, selectedMenu: 'home'};

export interface GlobalState {
    events: object[];
    isSidebarOpen: boolean;
    selectedMenu: string;
}

export interface Action<R> {
    payload: any;
    type: R;
}

export enum Events {
    GET_EVENTS = 'GET_EVENTS',
    ADD_EVENT = 'ADD_EVENT',
    OPEN_SIDEBAR = 'OPEN_SIDEBAR',
    SELECTED_MENU = 'SELECTED_MENU'
}

const reducer = (state: GlobalState, action: Action<Events>) => {
    switch (action.type) {
        case Events.GET_EVENTS:
            return {...state, events: action.payload};
        case Events.ADD_EVENT:
            return {...state, events: {...state.events, ...action.payload}};
        case Events.OPEN_SIDEBAR:
            return {...state, isSidebarOpen: action.payload};
        case Events.SELECTED_MENU:
            return {...state, selectedMenu: action.payload};
        default:
            return state;
    }
};

export const EventContext = createContext<{state: GlobalState, dispatch: Dispatch<Action<Events>>}>({state: initialState, dispatch: () => null});


export function EventContextProvider({children}: JSX.ElementChildrenAttribute): JSX.Element {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <EventContext.Provider value={{ state, dispatch }}>{ children }</EventContext.Provider>
}