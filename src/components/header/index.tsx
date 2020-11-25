import styled from 'styled-components'
import React, {useContext} from 'react'
import {EventContext, Events} from "../../../utils/EventContext";

const Navbar = styled.header`
    font-size: ${(props) => props.theme.font.size};
    display: flex;
    justify-content: space-between;
`;

const HamburgerDiv = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    background: green;
`

const HamburgerSpan = styled.span`
    width: 19px;
    height: 14px;
    background: transparent;
    border-top: 2px solid white;
    position: relative;
    
    &:after, &:before {
        content:'';
        position: absolute;
        top: 0;
        left: 0;
        border-top: 2px solid white;
    }
    &:after {
       width: 80%;
       transform: translateY(4px) translateX(2px);
    }
    &:before {
      width: 100%;
      transform: translateY(10px);
    }
    `;

export default function Header(): JSX.Element {
    const {state, dispatch} = useContext(EventContext);
    return <Navbar>
        HEADER
        <HamburgerDiv>
            <HamburgerSpan onClick={() => dispatch({type: Events.OPEN_SIDEBAR, payload: !state.isSidebarOpen})}/>
        </HamburgerDiv>
    </Navbar>
}