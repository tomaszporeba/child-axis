import React, {useContext, useEffect} from "react";
import {Actions, GlobalContext} from "../../../utils/GlobalContext";
import styled from 'styled-components';
import _ from 'lodash';

const ContentWrapper = styled.article`
    width: 850px;
    height: 100%;
`

const EventCore = styled.div`
    height: 70%;
    width: 100%;
    display: flex;
`;

const EventHighlights = styled.div`
    height: 30%;
    width: 100%;
    display: flex;
    flex-grow: 1;
`;

const EventHighlight = styled.div`
    flex: 1;
    display: flex;
    padding: 0 20px;
    justify-content: left;
    flex-direction: column;
`;

const Name = styled.div`
    width: 50%;
`;

const Astronaut = styled.div`
    position: relative;
    width: 50%;
`;

const AstroImg = styled.img`
    position: absolute;
    right: 10px;
    height: 100%;
`

const StyledH1 = styled.h1`
    font-size: 4rem;
`;

const StyledButton = styled.div`
    text-transform: uppercase;
    position: relative;
    width: 100px;
    z-index: 1;
    
    &:after {
       content: '';
       position: absolute;
       background: #0070f3;
       width: 60px;
       height: 30px;
       right: 20px;
       top: -7px;
       z-index: -1;
    }
`

export default function Content(): JSX.Element {

    const {state, dispatch} = useContext(GlobalContext);

    const event = state.events[state.selectedEvent];
    return <ContentWrapper>
        <EventCore>
            <Name>
                <StyledH1>
                    {event.name}
                </StyledH1>
                <StyledButton>
                    Hire us
                </StyledButton>
            </Name>
            <Astronaut>
                <AstroImg src={'/spaceman.png'}/>
            </Astronaut>
        </EventCore>
        <EventHighlights>
            {console.log(event.highlights)}
            {event.highlights.map((highlight, index) => <Highlight highlight={highlight} key={index}/>)}
        </EventHighlights>
    </ContentWrapper>
}

function Highlight(highlight: any) {
    return <EventHighlight>
        {highlight.highlight.name}
        <span>{highlight.highlight.description}</span>
    </EventHighlight>
}
