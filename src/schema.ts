import { buildSchema } from "graphql";


export default buildSchema(`

  type Query {
    posts: [Post!]!

    postById(id: ID!): Post!

  }

  type User {
    id: ID!
    name: ID!
    username: String!
    email: String!
  }

  type Post {
    id: ID!
    userId: ID!
    title: String!
    body: String!
    user: User!
    comments: [Comment!]!
  }

  type Comment {
    id: ID!,
    postId: ID!
    name: String!
    email: String!
    body: String!
  }

`);
