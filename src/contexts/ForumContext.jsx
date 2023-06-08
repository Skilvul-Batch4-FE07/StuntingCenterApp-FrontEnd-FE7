import { createContext, useState } from "react";
import { fetchForum } from "../utils/api";
import { useQuery } from "react-query";

export const ForumContext = createContext();

// eslint-disable-next-line react/prop-types
export const ForumProvider = ({ children }) => {
  const { data: forums, isLoading } = useQuery("forums", fetchForum);
  const [commentData, setCommentData] = useState({});

  const handleCommentClick = (forumId) => {
    setCommentData((prevData) => {
      const updatedData = { ...prevData };
      updatedData[forumId] = forums
        .find((forum) => forum.id === forumId)
        ?.replies?.slice();
      return updatedData;
    });
  };

  return (
    <ForumContext.Provider
      value={{
        forums,
        isLoading,
        commentData,
        handleCommentClick,
      }}
    >
      {children}
    </ForumContext.Provider>
  );
};
