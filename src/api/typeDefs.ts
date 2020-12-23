import  {  gql  }  from  "apollo-server-micro";

export  const  typeDefs  =  gql`
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
    
    type User {
        id: ID
        firstName: String
        lastName: String
        email: String
        password: String
    }
    
    input UserInput {
        id: ID
        firstName: String
        lastName: String
        email: String
        password: String
    }

    type  Query {
        users: [User]
        events: [Event]
        highlights: [Highlight]
    }
    
    type Mutation {
        addEvent(event: EventInput): Event
        addUser(user: UserInput): User
    }
    `
;