import React, { useContext, useEffect, useState } from 'react';
import Content from "../src/components/content";
import styled from 'styled-components';
import Axis from "../src/components/axis";
import { useQuery } from '@apollo/client';
import { GET_EVENTS } from './api/graphql/queries';
import { Actions, GlobalContext } from '../utils/GlobalContext';

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


export default function Home(): JSX.Element {
    const {state, dispatch} = useContext(GlobalContext);
    const {loading, error, data} = useQuery(GET_EVENTS);
    useEffect(() => {
        if (data) {
            dispatch({type: Actions.SET_EVENTS, payload: data.events})
        }
    }, [data]);
    return loading ? <h1>Loading</h1> :
         (
        <Container>
            <AxisContainer>
                <Axis/>
            </AxisContainer>
            <ContentWrapper>
                <Content events = {state.events} selectedEvent={state.selectedEvent}/>
            </ContentWrapper>
        </Container>
    )
}
