import * as request from "request-promise-native";
import * as _debug from "debug";

const debug = _debug('testsGraphQL:api:comments');


export async function getCommentsForPost(postId) {
  debug('Get comments for post %s', postId);

  return await request({
    url: `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
    qs: {
      postId,
    },
    json: true,
  });
}
