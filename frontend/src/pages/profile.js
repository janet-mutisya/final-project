import React, { useState } from 'react';

/**
 * Farmer Profile page – shows user details and allows picture uploads.
 */
const Profile = () => {
  const [profilePic, setProfilePic] = useState(null);

  const handleImageUpload = (e) => {
    // Handle image upload logic (this demo uses a simple URL.createObjectURL)
    const file = e.target.files[0];
    setProfilePic(URL.createObjectURL(file));
  };

  return (
    <div>
      <h2>Your Profile</h2>
      <div>
        {profilePic ? (
          <img
            src={profilePic}
            alt="Profile"
            style={{ width: '150px', height: '150px', borderRadius: '50%' }}
          />
        ) : (
          <p>No profile picture uploaded.</p>
        )}
        <input type="file" onChange={handleImageUpload} />
      </div>
      {/* Display additional profile details and settings here */}
    </div>
  );
};

export default Profile;
