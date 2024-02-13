const typeDefs = `

  scalar Date

  type User {
    _id: ID!
    firstName: String
    lastName: String
    email: String!
    password: String!
    createdAt: String
    updatedAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Post {
    _id: ID!
    concertName: String!
    message: String!
    image: String!
    user: User!
    comments: [Comment!]!
  }

  type Comment {
    _id: ID!
    message: String!
    user: User!
  }

  type Query {
    me: User
    getAllPosts: [Post!]!
    getUserPosts: [Post!]!
    getPostById(postId: ID!): Post
  }

  type Mutation {
    addUser(firstName: String, lastName: String, email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    createPost(concertName: String!, message: String!, image: String!): Post
    deletePost(postId: ID!): Post
    addComment(postId: ID!, message: String!): Comment
  }
`;

module.exports = typeDefs;
