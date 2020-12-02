import styled from 'styled-components'
import React, {useContext} from 'react'
import Image from 'next/image'
import {GlobalContext, Actions} from "../../../utils/GlobalContext";
import Link from "next/link";

const Navbar = styled.header`
    font-size: ${(props) => props.theme.font.size.medium};
    text-transform: uppercase;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    line-height: 10px;
    
    a {
    text-decoration: none;
    color: white;
    };
`;

const LogoContainer = styled.div`
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const GlobalP = styled.p`
    margin-left: 10px;
`

const HamburgerDiv = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-right: 20px;
    cursor: pointer;
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
    const {state, dispatch} = useContext(GlobalContext);
    return <Navbar>
        <Link href='/'><a>
            <LogoContainer>
                <Image src="/logo.png" width={30} height={28}/>
                <GlobalP>GLOBAL</GlobalP>
            </LogoContainer>
        </a>
        </Link>
        <HamburgerDiv>
            <HamburgerSpan onClick={() => dispatch({type: Actions.OPEN_SIDEBAR, payload: !state.isSidebarOpen})}/>
        </HamburgerDiv>
    </Navbar>
}