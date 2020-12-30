import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import Axis from "../src/components/axis";
import { GET_EVENTS } from './api/graphql/queries';
import { Actions, GlobalContext } from '../utils/GlobalContext';
import { initializeClient } from './_app';
import { NextPageContext } from 'next';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
`;
const AxisContainer = styled.div`
  width: 15%;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`


export default function Home({events}): JSX.Element {
    const { dispatch} = useContext(GlobalContext);
    useEffect(() => {
        if (events) {
            dispatch({type: Actions.SET_EVENTS, payload: events})
        }
    }, [events]);
    return <><Container>
        <AxisContainer>
            <Axis/>
        </AxisContainer>
        <ContentWrapper>
            {/*<Content events = {state.events} selectedEvent={state.selectedEvent}/>*/}
        </ContentWrapper>
    </Container></>
}

Home.getInitialProps = async (context: NextPageContext) => {
    console.log('context: ', context.req?.headers)
    return {}
}

export async function getInitialProps(context) {
    console.log('context', context.query);
    const client = initializeClient();
    const {data} = await client.query({query: GET_EVENTS});
    return {
        props: {
            events: data.events
        }
    }
}

