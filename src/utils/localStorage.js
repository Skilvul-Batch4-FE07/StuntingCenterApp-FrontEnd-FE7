const localStorageKey = 'myAppUser';

export const saveUserToLocalStorage = (user) => {
  localStorage.setItem(localStorageKey, JSON.stringify(user));
};

export const getUserFromLocalStorage = () => {
  const user = localStorage.getItem(localStorageKey);
  return user ? JSON.parse(user) : null;
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem(localStorageKey);
};
