import * as request from "request-promise-native";
import * as _debug from "debug";

import createDataLoader from './createDataLoader';
import { getAllPosts, getPost } from "./api/posts";
import { getCommentsForPost } from "./api/comments";

const debug = _debug('testsGraphQL:createResolver');


export default function createResolver() {
  const dataLoader = createDataLoader();
  const enrichPost = createEnrichPost(dataLoader);

  return {

    async posts() {
      const posts = await getAllPosts();
      return posts.map(enrichPost);
    },

    async postById({ id }) {
      const post = await getPost(id);
      return enrichPost(post);
    }

  };
}

function createEnrichPost(dataLoader) {
  return post => {
    return {
      ...post,
      comments: () => getCommentsForPost(post.id),
      user: () => dataLoader.users.load(post.userId),
    };
  };
}
