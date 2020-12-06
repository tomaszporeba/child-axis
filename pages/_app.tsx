import {AppProps} from 'next/app'
import React, {Component, Dispatch, useContext} from "react";
import {Action, GlobalContext, GlobalContextProvider, Actions, GlobalState} from "../utils/GlobalContext";
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components'
import Link from "next/link";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #0b0b0b;
    font-family: Montserrat, sans-serif;
    color: white;
  }
`;

const FullContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
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
    align-items: center;
    flex-direction: column;
    width: 75%;
    height: 100%;
    margin: 0 auto;
    
    @media (max-width: 1024px) {
    width: 100%;
    }
`;

const MenuContainer = styled.aside`
    font-color: white;
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MenuDiv = styled.nav`
    width: 20%;
    text-align: right;
    font-size: 3rem;
    
    @media (max-width: 768px) {
    font-size: 2rem;
  }
    @media (max-width: 426px) {
    font-size: 1.6rem;
  }
`;

const StyledHeader = styled.div`
    height: 70px;
    width: 100%
    `;

const StyledA = styled.a`
    position: relative;
    line-height: 1.6;
    text-transform: capitalize;
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
    @media (max-width: 426px) {
    &:before {
    top: 38%
    }
  }  
`;

const ContentContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding-top: 50px;
`

const ComponentContainer = styled.div`
    flex: 1;
`



const theme = {
    colors: {
        primary: '#0070f3',
    },
    font: {
        size: {
            small: '10px',
            medium: '16px',
            large: '30px'
        }
    }
};

function App({Component, pageProps}: AppProps) {
    return (
        <>
            <GlobalStyle/>
            <ThemeProvider theme={theme}>
                <GlobalContextProvider>
                    <ContainerComponent pageProps={pageProps} Component={Component} router={null}/>
                </GlobalContextProvider>
            </ThemeProvider>
        </>)
}

export default App

function ContainerComponent({Component, pageProps}: AppProps) {
    const {state, dispatch} = useContext(GlobalContext);
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
                <ContentContainer>
                    <ComponentContainer>
                        <Component state={state} {...pageProps} />
                    </ComponentContainer>
                </ContentContainer>
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

function MenuItem(props: { menuItem: MenuItemType }): JSX.Element {
    const {state, dispatch} = useContext(GlobalContext);
    return <ul onClick={() => handleMenuItemClick(state, dispatch, props.menuItem.name)}>
        <Link href={props.menuItem.path}><StyledA
            isActive={state.selectedMenu === props.menuItem.name}>{props.menuItem.name}</StyledA></Link>
    </ul>
}

function handleMenuItemClick(state: GlobalState, dispatch: Dispatch<Action<Actions>>, menuName: string) {
    dispatch({type: Actions.OPEN_SIDEBAR, payload: !state.isSidebarOpen});
    dispatch({type: Actions.SELECTED_MENU, payload: menuName})
}
