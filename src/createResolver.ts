import * as request from "request-promise-native";
import * as _debug from "debug";

import createDataLoader from './createDataLoader';

const debug = _debug('testsGraphQL:createResolver');


async function getAllPosts() {
  debug('Get all posts');

  return await request({
    url: 'https://jsonplaceholder.typicode.com/posts',
    json: true,
  });
}

async function getCommentsForPost(postId) {
  debug('Get comments for post %s', postId);

  return await request({
    url: `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
    qs: {
      postId,
    },
    json: true,
  });
}

async function getUser(userId) {
  debug('Get user %s', userId);

  return await request({
    url: `https://jsonplaceholder.typicode.com/users/${userId}`,
    json: true,
  });
}

export default function createResolver() {
  const dataLoader = createDataLoader();

  return {

    posts: async () => {
      const posts = await getAllPosts();
      return posts.map(post => {
        return {
          ...post,
          comments: () => getCommentsForPost(post.id),
          user: () => dataLoader.users.load(post.userId),
        };
      });
    },

  };
}
