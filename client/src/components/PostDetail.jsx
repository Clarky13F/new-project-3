import Page from "../components/Page";

import React, { useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { GET_POST_BY_ID } from "../graphql/queries";
import { ADD_COMMENT } from "../graphql/mutations";

const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
    },
    header: {
        marginBottom: '20px',
    },
    image: {
        width: '100%',
        maxHeight: '400px',
        objectFit: 'cover',
        marginBottom: '20px',
    },
    commentsContainer: {
        marginTop: '20px',
    },
    commentInput: {
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
    },
    commentList: {
        listStyle: 'none',
        padding: '0',
    },
    commentItem: {
        marginBottom: '10px',
    },
};

const PostDetail = () => {
    const { postId } = useParams();
    const [comment, setComment] = useState('');

    const { loading, error, data } = useQuery(GET_POST_BY_ID, {
        variables: { postId },
    });

    const [addComment] = useMutation(ADD_COMMENT, {
        onError: (error) => {
            console.error('Error adding comment:', error.message);
        },
        refetchQueries: [{ query: GET_POST_BY_ID, variables: { postId } }],
    });

    const handleAddComment = async () => {
        try {
            await addComment({
                variables: { postId, message: comment },
            });
            setComment('');
        } catch (error) {
            console.error('Error adding comment:', error.message);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const post = data.getPostById;

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>{post.concertName}</h2>
            <p>{post.message}</p>
            <p>Posted by: {post.user.email}</p>
            <img src={post.image} alt={post.concertName} style={styles.image} />

            <div style={styles.commentsContainer}>
                <h3>Comments</h3>
                <textarea
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    style={styles.commentInput}
                />
                <button onClick={handleAddComment}>Add Comment</button>

                <ul style={styles.commentList}>
                    {post.comments.map((comment) => (
                        <li key={comment._id} style={styles.commentItem}>
                            <strong>{comment.user.firstName} { comment.user.lastName}:</strong> {comment.message}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PostDetail;