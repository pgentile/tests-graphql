import * as request from "request-promise-native";
import * as _debug from "debug";

const debug = _debug('testsGraphQL:api:users');


export async function getUsersByIds(ids) {
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
