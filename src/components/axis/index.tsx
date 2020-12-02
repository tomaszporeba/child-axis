import React, {useContext} from "react";
import styled from 'styled-components';
import {Actions, GlobalContext} from "../../../utils/GlobalContext";

const SideNavContainer = styled.ul`
    height: 80%;
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

export default function Axis(): JSX.Element {
    return <SideNavContainer>
        <LiItems/>
    </SideNavContainer>
}

const liItems = [
    {id: 1, name: 'Narodziny'},
    {id: 2, name: 'Kupa'},
    {id: 3, name: 'Dupa'},
    {id: 4, name: 'Siki'},
];

function LiItems(): JSX.Element {
    const {state, dispatch} = useContext(GlobalContext);
    console.log(JSON.stringify(state))
    const items = liItems.map((item, index) =>
        <MenuLi selected={state.selectedEvent.id === item.id}
                onClick={() => dispatch({type: Actions.SELECTED_EVENT, payload: item})}
                key={index}>
            <span>{item.name}</span>
        </MenuLi>);
    return <>{items}</>
}

