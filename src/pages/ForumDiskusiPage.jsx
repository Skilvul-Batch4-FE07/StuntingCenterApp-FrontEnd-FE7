import { useContext, useState } from "react";
import { ForumContext } from "../contexts/ForumContext";
import { Loader } from "../components/Loader";
import { BiComment, BiLike } from "react-icons/bi";
import CommentForm from "../components/CommentForm";
// import NewDiscussionForm from "../components/NewDiscussionForm";

function ForumDiskusiPage() {
  const { forums, isLoading, handleCommentClick, commentData, handlePostComment, handlePostDiscussion } =
    useContext(ForumContext);

  const [newComment, setNewComment] = useState("");
  const [newDiscussion, setNewDiscussion] = useState({ title: "", postContent: "" });
  const [postedDiscussion, setPostedDiscussion] = useState(null);
  if (isLoading) {
    return <Loader />;
  }

  const handleSubmitComment = (forumId) => {
    if (newComment.trim() === "") return;
    handlePostComment(forumId, newComment);
    setNewComment("");
  };

  const handleSubmitDiscussion = (e) => {
    e.preventDefault();
    if (newDiscussion.title.trim() === "" || newDiscussion.postContent.trim() === "") return;
    handlePostDiscussion(newDiscussion);
    setPostedDiscussion(newDiscussion);
    setNewDiscussion({ title: "", postContent: "" });
  };

  return (
    
    <div className="grid grid-cols-3 pt-10 justify-center mx-4 md:mx-32">
      <div className="col-span-2">
        {forums?.map((forum) => (
          <div key={forum.id} className="mb-8">
            <div className="max-w-2xl border-2 border-slate-200 rounded-lg shadow-lg p-4 space-y-4">
              <div className="flex gap-4 items-center">
                <img
                  src={forum.userProfile}
                  alt={`user profile ${forum.id}`}
                  className="rounded-full w-16"
                />
                <div>
                  <p className="font-semibold text-lg">{forum.name}</p>
                  <span className="text-sm text-slate-600">
                    {forum.createdAt}
                  </span>
                </div>
              </div>
              <div>
                <h1 className="font-semibold text-xl">{forum.title}</h1>
                <p className="text-lg">{forum.postContent}</p>
              </div>
              <div className="flex gap-4">
                <button className="bg-gray-300 py-1 px-4 rounded-full flex items-center gap-1">
                  <BiLike /> like
                </button>
                <button
                  className="bg-gray-300 py-1 px-4 rounded-full flex items-center gap-1"
                  onClick={() => handleCommentClick(forum.id)}
                >
                  <BiComment /> {forum.replies.length}
                </button>
              </div>
              <div className="ml-6 border-gray-300 space-y-4">
                {commentData[forum.id] &&
                  commentData[forum.id].map((reply) => (
                    <div key={reply.id} className="flex items-center gap-4">
                      <img
                        src={reply.userProfile}
                        alt={`user profile ${reply.id}`}
                        className="rounded-full w-8"
                      />
                      <div className="bg-gray-300 rounded-md py-2 pl-2 pr-6">
                        <p className="font-medium text-md">{reply.name}</p>
                        <p className="font-regular">{reply.contentReply}</p>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="mt-4">
                <CommentForm
                  onSubmit={(comment) => handleSubmitComment(forum.id, comment)}
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-4 col-span-1 flex flex-col">
        <button className="bg-teal-500 py-2 px-4 rounded-full">
          Buat Diskusi Baru
        </button>
        <button className="bg-teal-500 py-2 px-4 rounded-full">
          Diskusi Saya
        </button>
        <button className="bg-teal-500 py-2 px-4 rounded-full">
          Paling Populer
        </button>
        <button className="bg-teal-500 py-2 px-4 rounded-full">
          Semua Diskusi
        </button>
        <form onSubmit={handleSubmitDiscussion}>
          <input
            type="text"
            value={newDiscussion.title}
            onChange={(e) => setNewDiscussion({ ...newDiscussion, title: e.target.value })}
            placeholder="Judul Diskusi"
            className="border-2 border-gray-300 rounded-md p-2 w-full"
          />
          <textarea
            value={newDiscussion.postContent}
            onChange={(e) => setNewDiscussion({ ...newDiscussion, postContent: e.target.value })}
            placeholder="Pertanyaan atau tanggapan kamu"
            className="border-2 border-gray-300 rounded-md p-2 w-full"
            rows={4}
          />
          <button
            type="submit"
            className="bg-teal-500 text-white py-1 px-4 mt-2 rounded-md"
          >
            Post Discussion
          </button>
        </form>
        {postedDiscussion && (
          <div className="max-w-2xl border-2 border-slate-200 rounded-lg shadow-lg p-4 space-y-4">
            <h1 className="font-semibold text-xl">{postedDiscussion.title}</h1>
            <p className="text-lg">{postedDiscussion.postContent}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ForumDiskusiPage;
