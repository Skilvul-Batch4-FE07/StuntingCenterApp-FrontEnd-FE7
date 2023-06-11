import { createContext, useState } from "react";
import { useQuery, useQueryClient , useMutation } from "react-query";
import { fetchForum, postDiscussion, postComment } from "../utils/api";


export const ForumContext = createContext();

// eslint-disable-next-line react/prop-types
export const ForumProvider = ({ children }) => {
  const queryClient = useQueryClient();
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

  const postNewComment = useMutation(({ forumId }) =>
    postComment(forumId)
  );

  const postNewDiscussion = useMutation((discussion) =>
    postDiscussion(discussion)
  );

  const handlePostDiscussion = (discussion) => {
    postNewDiscussion.mutate(discussion, {
      onSuccess: () => {
        queryClient.invalidateQueries("forums");
      },
      onError: (error) => {
        console.error("Gagal membuat diskusi baru:", error);
      },
    });
  };

  const handlePostComment = (forumId, comment) => {
    postNewComment.mutate({ forumId, comment }, {
      onSuccess: () => {
        queryClient.invalidateQueries("forums");
      },
      onError: (error) => {
        console.error("Gagal mengirim komentar:", error);
      },
    });
  };

  return (
    <ForumContext.Provider
      value={{
        forums,
        isLoading,
        commentData,
        handleCommentClick,
        handlePostDiscussion,
        handlePostComment,
        postNewComment
      }}
    >
      {children}
    </ForumContext.Provider>
  );
};
