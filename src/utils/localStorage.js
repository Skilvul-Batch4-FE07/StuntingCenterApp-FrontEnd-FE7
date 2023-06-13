const CURRENT_USER_ID_KEY = 'currentUserId';

export const setCurrentUser = (user) => {
  localStorage.setItem(CURRENT_USER_ID_KEY, JSON.stringify(user));
};

export const getCurrentUser = () => {
  const user = localStorage.getItem(CURRENT_USER_ID_KEY);
  return user ? JSON.parse(user) : null;
};

export const clearCurrentUser = () => {
  localStorage.removeItem(CURRENT_USER_ID_KEY);
};
