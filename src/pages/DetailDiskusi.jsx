import { useContext, useState, useEffect } from "react";
import { ForumContext } from "../contexts/ForumContext";
import { BiComment, BiLike } from "react-icons/bi";
import CommentForm from "../components/CommentForm";
import { Loader } from "../components/Loader";
import { Navigate, useParams } from "react-router-dom";
import { AiOutlineWechat } from "react-icons/ai";
import { BsChevronLeft } from "react-icons/bs";
import { IoShareSocialOutline } from "react-icons/io5";
import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import Navbar from "../components/Navbar";
import { useSelector,useDispatch } from "react-redux";
import Footer from "../components/Footer";
import {
  getCurrentUser
} from "../utils/localStorage";
import { loadUser } from "../features/authSlice";


function DetailDiskusi() {
  const dispatch = useDispatch();
  const { forums, isLoading, handlePostComment } = useContext(ForumContext);
  const [newComment, setNewComment] = useState("");
  const { id } = useParams();
  const [isCommentUpdating, setCommentUpdating] = useState(false);
  const userProfile = useSelector((state) => state.auth.userProfile);
    const [name, setName] = useState('');

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!userProfile && currentUser) {
      dispatch(loadUser());
    } else if (userProfile) {
      setName(userProfile.name);
    }
  }, [dispatch, userProfile]);
  
  dayjs.extend(relativeTime);
  dayjs.locale("id");
  const goBack = () => {
    window.history.back();
  };
  const sharePost = () => {
    const url = window.location.href;
    navigator.share({
      title: "Bagikan postingan ini",
      url: url,
    });
  };

  const handleSubmitComment = async (forumId) => {
    if (newComment.trim() === "") return;

    const updatedForum = { ...forum };
    const newReply = {
      id: Date.now().toString(),
      name: name || "",
      contentReply: newComment,
      userProfile: userProfile?.profileUrl || "",
      createdAt: new Date().toISOString(),
    };

    updatedForum.replies.push(newReply);

    const updatedForums = [...forums];
    const forumIndex = updatedForums.findIndex((f) => f.id === forumId);
    updatedForums[forumIndex] = updatedForum;

    setCommentUpdating(true);
    await handlePostComment(forum.id, newComment); // Tunggu hingga pembaruan komentar selesai
    setCommentUpdating(false);
    setNewComment("");
  };

  const forum = forums.find((forum) => forum.id === id);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <div className="">
        <div className=" sm:max-w-2xl w-full px-4 justify-center mx-auto mt-10">
          <div className="flex justify-between mb-4">
            <button>
              <BsChevronLeft className="text-xl" onClick={goBack} />
            </button>
            <p className="font-semibold text-lg">Postingan {name}</p>
            <button>
              <IoShareSocialOutline className="text-xl" onClick={sharePost} />
            </button>
          </div>
          {forums ? (
            <div key={forum.id} className="mb-8">
              <div className="max-w-2xl border-2 border-slate-200 rounded-lg shadow-lg p-4 space-y-4">
                <div className="flex gap-4 items-center">
                  <img
                    src={forum.userProfile}
                    alt={`user profile ${forum.id}`}
                    className="rounded-full w-16"
                  />
                  <div>
                    <p className="font-semibold text-lg">{name}</p>
                    <span className="text-sm text-slate-600">
                      {dayjs(forum.createdAt).fromNow()}
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
                  <button className="bg-gray-300 py-1 px-4 rounded-full flex items-center gap-1">
                    <BiComment />{" "}
                    {forum.replies.length > 0 ? forum.replies.length : ""}
                  </button>
                </div>
                <div className="commentDetail overflow-y-auto overflow-x-hidden mt-8">
                  {forum.replies.length > 0 ? (
                    <ul className="space-y-4">
                      <h2 className="font-medium text-md">
                        Semua komentar({forum.replies.length})
                      </h2>
                      {forum.replies.map((reply) => (
                        <li
                          key={reply.id}
                          className="border-t border-slate-200 pt-4"
                        >
                          <div className="flex gap-4 items-center">
                            <img
                              src={reply.userProfile}
                              alt={`user profile ${reply.id}`}
                              className="rounded-full w-12"
                            />
                            <div>
                              <p className="font-semibold text-md">
                                {name}
                              </p>
                              <span className="text-sm text-slate-600">
                                {dayjs(reply.createdAt).fromNow()}
                              </span>
                              <p className="text-lg">{reply.contentReply}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="justify-center text-center space-y-1 py-4">
                      <AiOutlineWechat className="w-14 h-14 text-slate-500 justify-center mx-auto" />
                      <p className="font-semibold text-lg">
                        Belum ada komentar
                      </p>
                      <span>jadilah yang pertama berkomentar</span>
                    </div>
                  )}
                </div>
                <div className="mt-4">
                  <CommentForm
                    onSubmit={() => handleSubmitComment(forum.id)}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div>Discussion not found</div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DetailDiskusi;
