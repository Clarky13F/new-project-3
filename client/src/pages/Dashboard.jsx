import React, { useState, useEffect } from 'react';
import Page from "../components/Page";
import PostForm from '../components/PostForm';
import '../PostFormModal.css';
import { Link } from 'react-router-dom';

import { CREATE_POST_MUTATION } from "../graphql/mutations";
import { GET_ALL_POSTS } from "../graphql/queries";

import { useMutation, useQuery } from "@apollo/client";

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  postList: {
    listStyle: 'none',
    padding: 0,
  },
  postItem: {
    marginBottom: '20px',
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    transition: 'transform 0.2s ease-in-out',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  postLink: {
    textDecoration: 'none',
    color: '#333',
    display: 'block',
  },
  postTitle: {
    fontSize: '1.2rem',
    marginBottom: '8px',
    color: '#333',
  },
  postAuthor: {
    fontSize: '0.9rem',
    color: '#888',
  },
  addButton: {
    padding: '10px',
    background: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

const headContent = (
  <>
    <title>Dashboard</title>
    <meta name="description" content="This is the home page of my app." />
  </>
);

export default function Dashboard() {
  const [createPostMutation] = useMutation(CREATE_POST_MUTATION);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  const { loading, error, data } = useQuery(GET_ALL_POSTS);

  useEffect(() => {
    if (!loading && data) {
      setPosts(data.getAllPosts);
    }
  }, [loading, data]);

  const handlePostSubmit = async (postData) => {
    try {
      if (!postData?.image) {
        console.log(postData);
        throw Error("No image detected");
      }

      postData.image = postData.image.name;

      const response = await createPostMutation({
        variables: { ...postData },
      });

      console.log(response);

      setPosts([...posts, response.data.createPost]);

      setIsFormOpen(false);

    } catch (error) {
      console.error('Error saving post:', error.message);
    }
  };

  const handlePostClick = (postId) => {
    getPostById({ variables: { postId } });
  };

  return (
    <Page isProtected={true} headContent={headContent}>
      <div style={styles.container}>
        <div>
          <h2>All Posts</h2>
          <button style={styles.addButton} onClick={() => setIsFormOpen(true)}>
            Add New Post
          </button>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
          {!loading && !error && (
            <ul style={styles.postList}>
              {posts.map((post) => (
                <li key={post._id} style={styles.postItem}>
                  <Link to={`/post/${post._id}`} style={styles.postLink} onClick={() => handlePostClick(post._id)}>
                    <div>
                      <h3 style={styles.postTitle}>{post.concertName}</h3>
                      <p style={styles.postAuthor}>By {post.user.firstName} {post.user.lastName}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        {isFormOpen && <PostForm onSubmit={handlePostSubmit} />}
      </div>
    </Page>
  );
};