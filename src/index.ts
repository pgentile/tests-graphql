import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import * as _debug from 'debug';

import schema from './schema';
import createResolver from './createResolver';

const debug = _debug('testsGraphQL');


const app = express();
app.use('/graphql', graphqlHTTP(() => {
  return {
    schema,
    rootValue: createResolver(),
    graphiql: true,
  }
}));

const PORT = 3000;
app.listen(PORT, () => {
  debug(`GraphQL server running on port ${PORT}.`)
});
