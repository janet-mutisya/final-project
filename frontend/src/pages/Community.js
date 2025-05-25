import React, { useState, useEffect } from 'react';
import CommunityPost from '../components/CommunityPost';

/**
 * Community page – displays posts from farmers for knowledge sharing and discussion.
 */
const Community = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch community posts from API (using dummy data for demonstration)
    setPosts([
      { id: 1, author: 'Farmer John', content: 'Any tips for pest control?', timestamp: Date.now() },
      { id: 2, author: 'Farmer Mary', content: 'Consider organic compost to improve soil quality.', timestamp: Date.now() }
    ]);
  }, []);

  return (
    <div>
      <h2>Community Forum</h2>
      {posts.map(post => (
        <CommunityPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Community;
