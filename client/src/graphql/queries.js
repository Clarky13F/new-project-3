import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query getMeQuery {
    me {
      _id
      firstName
      lastName
      email
      createdAt
      updatedAt
    }
  }
`;

export const GET_ALL_POSTS = gql`
  query GetAllPosts {
    getAllPosts {
      _id
      concertName
      message
      image
      user {
        _id
        email
        firstName
        lastName
      }
    }
  }
`;

export const GET_USER_POSTS = gql`
  query GetUserPosts {
    getUserPosts {
      _id
      concertName
      message
      image
      user {
        _id
        email
        firstName
        lastName
      }
    }
  }
`;

export const GET_POST_BY_ID = gql`
query GetPostById($postId: ID!) {
  getPostById(postId: $postId) {
    _id
    concertName
    message
    image
    user {
      _id
      email
      firstName
      lastName
    }
    comments {
      _id
      message
      user {
        _id
        email
        firstName
        lastName
      }
    }
  }
}
`;