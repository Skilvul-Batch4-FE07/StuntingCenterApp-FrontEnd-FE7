export const fetchArticles = () =>
  fetch("https://644e64ed1b4567f4d5866c65.mockapi.io/article").then((response) => response.json());