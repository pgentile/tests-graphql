import * as request from "request-promise-native";
import * as _debug from "debug";

const debug = _debug('testsGraphQL:api:posts');


export async function getPost(id: string) {
  debug('Get post for ID %s', id);

  return await request({
    json: true,
    url: `https://jsonplaceholder.typicode.com/posts/${id}`,
  });
}


export async function getAllPosts() {
  debug('Get all posts');

  return await request({
    json: true,
    url: 'https://jsonplaceholder.typicode.com/posts',
  });
}


export async function addPost(newPost) {
  debug("Adding new post: %O", newPost);

  return await request({
    json: true,
    method: 'POST',
    url: 'https://jsonplaceholder.typicode.com/posts',
    body: newPost,
  });
}
