const CURRENT_USER_ID_KEY = 'currentUserId';

export const setCurrentUserId = (userId) => {
  localStorage.setItem(CURRENT_USER_ID_KEY, userId);
};

export const getCurrentUserId = () => {
  return localStorage.getItem(CURRENT_USER_ID_KEY);
};

export const clearCurrentUserId = () => {
  localStorage.removeItem(CURRENT_USER_ID_KEY);
};
