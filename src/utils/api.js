export const fetchArticles = () =>
  fetch("https://644e64ed1b4567f4d5866c65.mockapi.io/article").then(
    (response) => response.json()
  );

  export const fetchForum = () =>
  fetch("https://647d55a0af98471085499e81.mockapi.io/forums").then(
    (response) => response.json()
  );
export const postComment = (forumId, comment) =>
  fetch(`https://647d55a0af98471085499e81.mockapi.io/forums/${forumId}/replies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ comment }),
  }).then((response) => response.json());
  
export const postDiscussion = (discussion) =>
  fetch("https://647d55a0af98471085499e81.mockapi.io/forums", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(discussion),
  }).then((response) => response.json());