const setCurrentUserId = (userId) => {
  localStorage.setItem('currentUserId', userId);
};

const getCurrentUserId = () => {
  return localStorage.getItem('currentUserId');
};

const clearCurrentUserId = () => {
  localStorage.removeItem('currentUserId');
};

export { setCurrentUserId, getCurrentUserId, clearCurrentUserId };