import React from 'react';
import Content from "../src/components/content";
import styled from 'styled-components';
import Axis from "../src/components/axis";

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
    return (
        <Container>
            <AxisContainer>
                <Axis/>
            </AxisContainer>
            <ContentWrapper>
                <Content/>
            </ContentWrapper>
        </Container>
    )
}
