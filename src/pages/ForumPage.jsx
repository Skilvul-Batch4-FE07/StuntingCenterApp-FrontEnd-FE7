import React from 'react';
import { useSelector } from 'react-redux';

const ForumPage = () => {
  const userProfile = useSelector((state) => state.auth.userProfile);

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>User: {userProfile.name}</p>
      <p>Email: {userProfile.email}</p>
    </div>
  );
};

export default ForumPage;
