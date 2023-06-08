import { useContext } from "react";
import { ForumContext } from "../contexts/ForumContext";
import { Loader } from "../components/Loader";
import { BiComment, BiLike } from "react-icons/bi";

function ForumDiskusiPage() {
  const { forums, isLoading, handleCommentClick, commentData } =
    useContext(ForumContext);

  if (isLoading) {
    return <Loader />;
  }

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
      </div>
    </div>
  );
}

export default ForumDiskusiPage;
