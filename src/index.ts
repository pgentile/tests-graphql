import * as express from 'express';
import * as graphqlHTTP from "express-graphql";

import * as bodyParser from 'body-parser';

import schema from './schema';
import resolvers from './schema/resolvers';


const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true,
}));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`GraphQL server running on port ${PORT}.`)
});
