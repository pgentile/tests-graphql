import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import * as _debug from 'debug';

import schema from './schema';
import createResolver from './createResolver';

const debug = _debug('testsGraphQL');


const app = express();
app.use('/graphql', graphqlHTTP(() => {
  const startTime = Date.now();

  return {
    schema,
    rootValue: createResolver(),
    graphiql: true,

    extensions() {
      const endTime = Date.now();

      return {
        startTime,
        endTime,
        runTime: endTime - startTime,
      };
    },
  }
}));

const PORT = 3000;
app.listen(PORT, () => {
  debug(`GraphQL server running on port ${PORT}.`)
});
