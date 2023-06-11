import axios from 'axios';

const apiUrl = 'https://6450b0c5a3221969114f68c0.mockapi.io/api/loginRegister/users';

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

export const getUserFromApi = async (email, password) => {
  try {
    const response = await axios.get(apiUrl);
    const users = response.data;
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );
    return foundUser || null;
  } catch (error) {
    console.error('Gagal mendapatkan user:', error);
    throw error;
  }
};

export const removeUserFromApi = async () => {
  try {
    const response = await axios.delete(apiUrl);
    console.log('User berhasil hihapus');
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
  fetch("https://644e64ed1b4567f4d5866c65.mockapi.io/article").then(
    (response) => response.json()
  );

export const fetchForum = () =>
  
  fetch("https://647d55a0af98471085499e81.mockapi.io/forums").then((response) =>
    response.json()
  );
export const postComment = (forumId) =>
  fetch(
    `https://647d55a0af98471085499e81.mockapi.io/forums/${forumId}/replies`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
},
      body: JSON.stringify(),
    }
  ).then((response) => response.json());

export const postDiscussion = (discussion) =>
  fetch("https://647d55a0af98471085499e81.mockapi.io/forums", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(discussion),
  }).then((response) => response.json());