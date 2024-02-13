import React, { useState, useEffect } from 'react';
import Page from "../components/Page";

import { Link } from 'react-router-dom';
import { useMutation, useQuery } from "@apollo/client";
import { getUser } from '../redux/slices/userSlice';
import { useSelector } from 'react-redux';

import { GET_USER_POSTS } from "../graphql/queries";
import { DELETE_POST } from "../graphql/mutations";

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
    postDeleteButton: {
      padding: '8px',
      background: '#e74c3c',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
    },
  };

const headContent = (
    <>
        <title>Profile</title>
        <meta name="description" content="This is the home page of my app." />
    </>
);


const Profile = () => {
    const { isAuthenticated, user } = useSelector(getUser());
    const [posts, setPosts] = useState([]);

    const { loading, error, data } = useQuery(GET_USER_POSTS);

    const handleDeletePost = async (postId) => {
        try {
          await deletePost({
            variables: { postId },
          });
    
          setPosts(posts.filter((post) => post._id !== postId));
        } catch (error) {
          console.error('Error deleting post:', error.message);
        }
      };

    const [deletePost] = useMutation(DELETE_POST, {
        refetchQueries: [{ query: GET_USER_POSTS }],
    });

    useEffect(() => {
        if (!loading && data) {
            setPosts(data.getUserPosts);
        }
    }, [loading, data]);

    return (
        <Page isProtected={true} headContent={headContent}>
          <div style={styles.container}>
            <h2>{isAuthenticated ? `${user?.firstName}'s Profile` : 'Profile'}</h2>
    
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
    
            {!loading && !error && (
              <div>
                {posts.map((post) => (
                  <div key={post._id} style={styles.postItem}>
                    <Link to={`/post/${post._id}`} style={styles.postLink}>
                      <div>
                        <h3 style={styles.postTitle}>{post.concertName}</h3>
                        <p>{post.message}</p>
                      </div>
                    </Link>
                    <img src={post.image} alt={post.concertName} />
                    <button
                      style={styles.postDeleteButton}
                      onClick={() => handleDeletePost(post._id)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Page>
      );
};

export default Profile;