import { GraphQLServer } from 'graphql-yoga';
import resolvers from './resolvers';
import typeDefs from './typeDefs';

const { PORT = 4000 } = process.env;

const context = req => ({
  req: req.request,
});

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context,
});

const options = {
  port: PORT,
};

server.start(options, () => console.log(`> Ready on http://localhost:${PORT}`));
