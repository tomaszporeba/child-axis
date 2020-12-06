import React, {useContext} from "react";
import styled from 'styled-components';
import {Actions, GlobalContext} from "../../../utils/GlobalContext";

const SideNavContainer = styled.ul`
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    &:before {
    content: '';
    background: #1b1b1b;
    width: 2px;
    height: 100%;
    position: absolute;
    left: 0;
  }
`;

const MenuLi = styled.li`
    cursor: pointer;
    display: list-item;
    text-align: -webkit-match-parent;
    list-style-type: square;
    list-style-position: inside;
    z-index: 10;
    font-size: 9px;
    position: relative;
    top: 5px;
    
    span {
        position: relative;
        top: 3px;
        padding-left: 10px;
        font-size: 1rem;
    }

  &::marker {
    color: ${(props) => props.selected ? 'blue': 'white'};
  }
`
const eventsToAdd = [
    {
        id: 1,
        name: 'Kupa',
        highlights: [{id: 0, name: 'lorems', description: 'lorem lorem lorem'}, {
            id: 1, name: 'ipsums',
            description: 'ipsum ipsum ipsumm'
        }, {id: 2, name: 'dolorsse', description: 'dolore dolore dolore'}]
    },
];

export default function Axis(): JSX.Element {
    const {state, dispatch} = useContext(GlobalContext);
    return <SideNavContainer>
        <LiItems/>
        <button onClick={() => dispatch({type: Actions.ADD_EVENT, payload: eventsToAdd[state.events.length -1]})}>Add event</button>
    </SideNavContainer>
}


function LiItems(): JSX.Element {
    const {state, dispatch} = useContext(GlobalContext);
    const items = state.events.map(({id, name}, index) =>
        <MenuLi selected={state.selectedEvent === id}
                onClick={() => dispatch({type: Actions.SELECTED_EVENT, payload: id})}
                key={index}>
            <span>{name}</span>
        </MenuLi>);
    return <>{items}</>
}

