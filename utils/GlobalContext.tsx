import {createContext, Dispatch, useReducer} from 'react';

const initialState = {
    events: [], isSidebarOpen: false, selectedMenu: 'home', selectedEvent: 0
};

export interface GlobalState {
    events: any[];
    isSidebarOpen: boolean;
    selectedMenu: string;
    selectedEvent: number;
}

export interface Action<R> {
    payload: any;
    type: R;
}

export enum Actions {
    GET_EVENTS = 'GET_EVENTS',
    SET_EVENTS = 'SET_EVENTS',
    ADD_EVENT = 'ADD_EVENT',
    OPEN_SIDEBAR = 'OPEN_SIDEBAR',
    SELECTED_MENU = 'SELECTED_MENU',
    SELECTED_EVENT = 'SELECTED_EVENT'
}

const reducer = (state: GlobalState, action: Action<Actions>) => {
    switch (action.type) {
        case Actions.GET_EVENTS:
            return {...state, events: action.payload};
        case Actions.ADD_EVENT:
            return {...state, events: [...state.events, action.payload]};
        case Actions.OPEN_SIDEBAR:
            return {...state, isSidebarOpen: action.payload};
        case Actions.SELECTED_MENU:
            return {...state, selectedMenu: action.payload};
        case Actions.SELECTED_EVENT:
            return {...state, selectedEvent: action.payload};
        case Actions.SET_EVENTS:
            return {...state, events: action.payload}
        default:
            return state;
    }
};

export const GlobalContext = createContext<{ state: GlobalState, dispatch: Dispatch<Action<Actions>> }>({
    state: initialState,
    dispatch: () => null
});


export function GlobalContextProvider({children}: JSX.ElementChildrenAttribute): JSX.Element {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <GlobalContext.Provider value={{state, dispatch}}>{children}</GlobalContext.Provider>
}