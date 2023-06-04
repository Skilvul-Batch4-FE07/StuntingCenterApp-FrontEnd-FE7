import axios from 'axios';

const apiUrl = 'https://6450b0c5a3221969114f68c0.mockapi.io/api/loginRegister/users';

export const saveUserToApi = async (user) => {
  try {
    const response = await axios.post(apiUrl, user);
    console.log('User saved successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error saving user:', error);
    throw error;
  }
};

export const getUserFromApi = async (email, password) => {
  try {
    const response = await axios.get(apiUrl);
    const users = response.data;
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );
    return foundUser || null;
  } catch (error) {
    console.error('Error getting user:', error);
    throw error;
  }
};

export const removeUserFromApi = async (userId) => {
  try {
    const url = `${apiUrl}/${userId}`;
    const response = await axios.delete(url);
    console.log('User removed successfully');
    return response.data;
  } catch (error) {
    console.error('Error removing user:', error);
    throw error;
  }
};
