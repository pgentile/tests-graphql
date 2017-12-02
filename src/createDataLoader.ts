import * as DataLoader from 'dataloader';
import * as request from 'request-promise-native';
import * as _debug from 'debug';

import { getUsersByIds } from "./api/users";

const debug = _debug('testsGraphQL:createDataLoader');


export default function createDataLoader() {
  return {
    users: new DataLoader(getUsersByIds),
  };
}
