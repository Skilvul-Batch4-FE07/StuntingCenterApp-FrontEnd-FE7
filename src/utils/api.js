import axios from 'axios';

const apiUrl = 'https://6450b0c5a3221969114f68c0.mockapi.io/api/loginRegister/users';

export const getUsers = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Gagal mendapatkan data pengguna:', error);
    throw error;
  }
};
export const createUser = async (user) => {
  const response = await axios.post(apiUrl, user);
  return response.data;
};


export const saveUserToApi = async (user) => {
  try {
    const response = await axios.post(apiUrl, user);
    console.log('User berhasil disimpan:', response.data);
    return response.data;
  } catch (error) {
    console.error('Gagal menyimpan user:', error);
    throw error;
  }
};

export const getUserFromApi = (email, password) => {
    const url = 'https://6450b0c5a3221969114f68c0.mockapi.io/api/loginRegister/users';
    return axios.get(url)
      .then((response) => {
        const users = response.data;

        for (let user of users) {
          if (user.email === email && user.password === password) {
            return user;
          }
        }

        return null;
      });
  };

export const removeUserFromApi = async () => {
  try {
    const response = await axios.delete(apiUrl);
    console.log('User berhasil dihapus');
    return response.data;
  } catch (error) {
    console.error('Gagal menghapus user:', error);
    throw error;
  }
};

export const updateUserInApi = async (userId, updatedUser) => {
  try {
    const response = await axios.put(`${apiUrl}/${userId}`, updatedUser);
    console.log('User berhasil diupdate:', response.data);
    return response.data;
  } catch (error) {
    console.error('Gagal mengupdate user:', error);
    throw error;
  }
};

export const fetchArticles = () =>
  fetch('https://644e64ed1b4567f4d5866c65.mockapi.io/article').then(
    (response) => response.json()
  );

export const fetchForum = () =>
  fetch('https://647d55a0af98471085499e81.mockapi.io/forums').then((response) =>
    response.json()
  );

export const postComment = (forumId) =>
  fetch(
    `https://647d55a0af98471085499e81.mockapi.io/forums/${forumId}/replies`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
    }
  ).then((response) => response.json());

export const postDiscussion = (discussion) =>
  fetch('https://647d55a0af98471085499e81.mockapi.io/forums', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(discussion),
  }).then((response) => response.json());
