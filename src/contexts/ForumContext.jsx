import { createContext, useState } from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { fetchForum, postDiscussion, postComment } from "../utils/api";
import { getCurrentUser } from "../utils/localStorage";

export const ForumContext = createContext();

export const ForumProvider = ({ children }) => {
  const queryClient = useQueryClient();
  const { data: forums, isLoading } = useQuery("forums", fetchForum);
  const [commentData, setCommentData] = useState({});
  const [userData, setUserData] = useState(null);
  const [newComment, setNewComment] = useState(""); // Tambahkan state untuk komentar baru

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

  const handlePostComment = async (forumId, newComment) => {
    if (newComment.trim() === "") return;

    try {
      const comment = {
        name: getCurrentUser() || "User",
        contentReply: newComment,
        userProfile: getCurrentUser() || "user-profile-url",
        createdAt: new Date().toISOString(),
      };

      await postComment(forumId, comment);
      queryClient.invalidateQueries("forums");
      setNewComment("");
    } catch (error) {
      console.error("Gagal mengirim komentar:", error);
    }
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
        postNewComment,
        newComment,
        setNewComment, // Tambahkan setNewComment ke dalam value dari context
      }}
    >
      {children}
    </ForumContext.Provider>
  );
};
