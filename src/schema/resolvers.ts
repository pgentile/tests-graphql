import * as request from "request-promise-native";
import * as debugLib from "debug";

const debug = debugLib('schema:resolvers');


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

namespace Resolvers {

  export async function posts() {
    const posts = await getAllPosts();
    return posts.map(post => {
      return {
        ...post,
        comments: async () => getCommentsForPost(post.id),
        user: async () => getUser(post.userId),
      };
    });
  }

}

export default Resolvers;
