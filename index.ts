import { ApolloServer } from 'apollo-server-micro';
import resolvers from './resolvers';
import typeDefs from './typeDefs';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

export default server.createHandler();
