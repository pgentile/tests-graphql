import * as DataLoader from 'dataloader';
import * as request from 'request-promise-native';
import * as _debug from 'debug';

const debug = _debug('testsGraphQL:createDataLoader');


async function loadUsers(ids) {
  const loadedUsers = ids.map(getUser);
  return Promise.all(loadedUsers);
}

async function getUser(userId) {
  debug('Get user %s', userId);

  return await request({
    url: `https://jsonplaceholder.typicode.com/users/${userId}`,
    json: true,
  });
}

export default function createDataLoader() {
  return {
    users: new DataLoader(loadUsers),
  };
}
