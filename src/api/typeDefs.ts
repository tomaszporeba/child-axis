import  {  gql  }  from  "apollo-server-micro";

export  const  typeDefs  =  gql`
    type  User {
        id: ID
        firstName: String
        password: String
    }
    
    type Event {
        id: ID
        name: String
        highlights: [Highlight]
    }
    
    input EventInput {
        id: ID
        name: String
        highlights: [HighlightInput]
    }
    
    type Highlight {
        id: ID
        name: String
        description: String
    }
    
    input HighlightInput {
        id: ID
        name: String
        description: String
    }

    type  Query {
        users: [User]
        events: [Event]
        highlights: [Highlight]
    }
    type Mutation {
        addEvent(event: EventInput): Event
    }
    `
;