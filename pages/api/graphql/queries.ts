import { gql } from '@apollo/client';

export const GET_EVENTS = gql`
  query GetEvents {
    events {
      id
      name
      highlights {
        name
        description
      }
    }
  }
`;

export const ADD_EVENT = gql`
    mutation AddEvent($event: EventInput) {
        addEvent(event: $event) {
            name
            highlights {
            name}
        }
    }`