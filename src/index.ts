import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import * as _debug from 'debug';
import * as moment from 'moment';

import schema from './schema';
import createResolver from './createResolver';

const debug = _debug('testsGraphQL');


const app = express();

app.use('/graphql', graphqlHTTP(() => {
  const startTime = Date.now();

  return {
    schema,
    graphiql: true,

    rootValue: createResolver(),

    extensions() {
      const endTime = Date.now();

      return {
        startTime: moment(startTime).format("YYYY-MM-DDTHH:mm:ssZ"),
        endTime: moment(endTime).format("YYYY-MM-DDTHH:mm:ssZ"),
        runTime: endTime - startTime,
      };
    },
  }
}));

const PORT = 3000;
app.listen(PORT, () => {
  debug(`GraphQL server running on port ${PORT}.`)
});
