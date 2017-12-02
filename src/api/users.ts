import * as request from "request-promise-native";
import * as _debug from "debug";

const debug = _debug('testsGraphQL:api:users');


export async function getUsersByIds(ids) {
  const loadedUsers = ids.map(getUser);
  return Promise.all(loadedUsers);
}

export async function getUser(id) {
  debug('Get user %s', id);

  return await request({
    url: `https://jsonplaceholder.typicode.com/users/${id}`,
    json: true,
  });
}
