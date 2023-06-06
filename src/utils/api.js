export const fetchArticles = () =>
  fetch("https://644e64ed1b4567f4d5866c65.mockapi.io/article").then(
    (response) => response.json()
  );

  export const fetchForum = () =>
  fetch("https://647d55a0af98471085499e81.mockapi.io/forums").then(
    (response) => response.json()
  );
