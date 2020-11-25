import {AppProps} from 'next/app'
import React, {Component, Dispatch, useContext} from "react";
import {Action, EventContext, EventContextProvider, Events, GlobalState} from "../utils/EventContext";
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import Sidebar from "../src/components/sidebar";
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components'
import Link from "next/link";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #0b0b0b;
    font-size: 10px;
    font-color: white;
    font-family: Montserrat, sans-serif;
  }
`;

const FullContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    transition: all .3s ease-in-out;
    background: black;
    transform:  ${(props => props.isSidebarOpen ? 'scale(0.35) translateX(-70%) perspective(1800px) rotateY(30deg)' : '')};
    outline: ${(props => props.isSidebarOpen ? '30px solid #0f33ff' : '')};
    -webkit-box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.44);
    -moz-box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.44);
    box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.44);
`

const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 1440px;
    background: yellow;
    margin: 0 auto;
`;

const MenuContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MenuDiv = styled.div`
    width: 20%;
    text-align: right;
    font-size: 3rem;
`;

const StyledHeader = styled.div`
    height: 70px;
    width: 100%
    `;

const StyledA = styled.a`
    position: relative;
    line-height: 1.6;
    text-transform: capitalize;
    font-size: 55px;
    font-weight: 900;
    color: white;

    
    &:hover {
      cursor: pointer;
    }
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      height: ${(props => props.isActive ? '15px' : '0px')};
      width: 110%;
      transform: translateX(-50%);
      background-color: ${(props) => props.theme.colors.primary}
    }
`;

const theme = {
    colors: {
        primary: '#0070f3',
    },
    font: {
        size: '20px'
    }
};

function App({Component, pageProps}: AppProps) {
    return (
        <>
            <GlobalStyle/>
            <ThemeProvider theme={theme}>
                <EventContextProvider>
                    <ContainerComponent pageProps={pageProps} Component={Component} router={null}/>
                </EventContextProvider>
            </ThemeProvider>
        </>)
}

export default App

function ContainerComponent({Component, pageProps}: AppProps) {
    const {state, dispatch} = useContext(EventContext);
    return <>
        <MenuContainer>
            <MenuDiv>
                <GenerateMenu menuItems={MenuItems}/>
            </MenuDiv>
        </MenuContainer>
        <FullContainer isSidebarOpen={state.isSidebarOpen}>
            <Container>
                <StyledHeader>
                    <Header/>
                </StyledHeader>
                <div>
                    <Component {...pageProps} />
                </div>
                <Sidebar/>
                <Footer/>
            </Container>
        </FullContainer>
    </>
}

type MenuItemType = {
    path: string;
    name: string;
}

const MenuItems: MenuItemType[] = [
    {path: '/', name: 'home'},
    {path: 'add-event', name: 'works'},
    {path: 'add-event', name: 'about'},
    {path: 'add-event', name: 'contact'},
    {path: 'add-event', name: 'hire us'},
]

function GenerateMenu({menuItems}): JSX.Element {
    const items = menuItems.map((item, index) => <MenuItem key={index} menuItem={item}/>)
    return <ul>{items}</ul>
}

function MenuItem(props: {menuItem: MenuItemType}): JSX.Element {
    const {state, dispatch} = useContext(EventContext);
    return <ul onClick={()=> handleMenuItemClick(state, dispatch, props.menuItem.name)}>
        <Link href={props.menuItem.path}><StyledA isActive={state.selectedMenu === props.menuItem.name}>{props.menuItem.name}</StyledA></Link>
    </ul>
}

function handleMenuItemClick(state: GlobalState, dispatch: Dispatch<Action<Events>>, menuName: string) {
    dispatch({type: Events.OPEN_SIDEBAR, payload: !state.isSidebarOpen});
    dispatch({type: Events.SELECTED_MENU, payload: menuName})
}
