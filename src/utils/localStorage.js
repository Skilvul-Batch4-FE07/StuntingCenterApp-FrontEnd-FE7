
export const setCurrentUser = (userId) => {
  localStorage.setItem('currentUser', userId);
};

export const getCurrentUser = () => {
  return localStorage.getItem('currentUser');
};

export const clearCurrentUser = () => {
  localStorage.removeItem('currentUser');
};

export const updateCurrentUser = (newName) => {
  const userId = getCurrentUser();
  if (userId) {
    setCurrentUser(newName);
  }
};

export function getInitials(name) {
  const names = name.split(" ");
  const initials = names.map((n) => n[0].toUpperCase());
  return initials.join("");
}

export const getUserFromLocalStorage = (userId) => {
  const userData = localStorage.getItem(userId);
  if (userData) {
    return JSON.parse(userData);
  }
  return null;
};



