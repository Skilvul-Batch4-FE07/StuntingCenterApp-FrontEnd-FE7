import { createContext } from "react";
import { fetchForum } from "../utils/api";
import { useQuery } from "react-query";

export const ForumContext = createContext();

// eslint-disable-next-line react/prop-types
export const ForumProvider = ({ children }) => {
  const { data: forums, isLoading } = useQuery("forums", fetchForum);
  // const addCommentMutation = useMutation(postComment);

  // const addComment = (comment, forumId) => {
  //   addCommentMutation.mutate({ comment, forumId });
  // };

  const value = { forums, isLoading };

  return (
    <ForumContext.Provider value={value}>{children}</ForumContext.Provider>
  );
};
