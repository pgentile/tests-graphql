import * as request from "request-promise-native";
import * as _debug from "debug";

const debug = _debug('testsGraphQL:api:posts');


export async function getPost(id: string) {
  debug('Get post for ID %s', id);

  return await request({
    url: `https://jsonplaceholder.typicode.com/posts/${id}`,
    json: true,
  });
}


export async function getAllPosts() {
  debug('Get all posts');

  return await request({
    url: 'https://jsonplaceholder.typicode.com/posts',
    json: true,
  });
}
