import React from 'react';

/**
 * Presents a single community post.
 */
const CommunityPost = ({ post }) => {
  return (
    <div style={postStyle}>
      <h4>{post.author}</h4>
      <p>{post.content}</p>
      <p style={{ fontSize: '0.8em', color: '#555' }}>{new Date(post.timestamp).toLocaleString()}</p>
    </div>
  );
};

const postStyle = {
  border: '1px solid #ddd',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '4px'
};

export default CommunityPost;
