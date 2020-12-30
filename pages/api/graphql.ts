import { ApolloServer } from 'apollo-server-micro'
import {resolvers} from "../../src/api/resolvers";
import {typeDefs} from "../../src/api/typeDefs";

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req, res}) => {
        return {req, res}
    }});

export  const  config  =  {
    api:  {
        bodyParser:  false
    }
};

export default apolloServer.createHandler({ path: '/api/graphql' })