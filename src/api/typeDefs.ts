import  {  gql  }  from  "apollo-server-micro";

export  const  typeDefs  =  gql`
    type  User {
        id: ID
        firstName: String
        password: String
    }

    type  Query {
        users: [User]
    }`;