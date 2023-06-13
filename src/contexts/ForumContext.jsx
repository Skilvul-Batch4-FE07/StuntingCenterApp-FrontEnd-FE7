import { createContext, useState } from "react";
import { useQuery, useQueryClient , useMutation } from "react-query";
import { fetchForum, postDiscussion, postComment } from "../utils/api";


export const ForumContext = createContext();

// eslint-disable-next-line react/prop-types
export const ForumProvider = ({ children }) => {
  const queryClient = useQueryClient();
  const { data: forums, isLoading } = useQuery("forums", fetchForum);
  const [commentData, setCommentData] = useState({});
  const [userData, setUserData] = useState(null);

  
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
    if (newComment.trim() === '') return;

    try {
      const comment = {
        name: 'User',
        contentReply: newComment,
        userProfile: 'user-profile-url', // Ganti dengan URL gambar profil pengguna
        createdAt: new Date().toISOString(),
      };

      await postComment(forumId, comment);
      queryClient.invalidateQueries('forums');
      setNewComment('');
    } catch (error) {
      console.error('Gagal mengirim komentar:', error);
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
        postNewComment
      }}
    >
      {children}
    </ForumContext.Provider>
  );
};
