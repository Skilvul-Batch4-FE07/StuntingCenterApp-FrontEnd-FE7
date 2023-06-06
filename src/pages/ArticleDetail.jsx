import { useContext } from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { ArticleContext } from "../contexts/ArticleContext";
import { useParams } from "react-router-dom";
import { Loader } from "../components/Loader";

function ArticleDetail() {
  const { articles, isLoading } = useContext(ArticleContext);
  const { id } = useParams();

  if (isLoading) {
    return <Loader />;
  }

  const article = articles.find((article) => article.id === id);

  return (
    <div className="flex flex-col items-center mt-20 gap-10 ">
      <div className="sm:space-x-24">
        <div className="fixed items-center bg-white p-2 rounded-md shadow-md shadow-slate-300 sm:bg-transparent sm:shadow-none">
          <div className="flex flex-col space-y-4">
            <FacebookShareButton url="{}">
              <FacebookIcon size={36} round />
            </FacebookShareButton>
            <TwitterShareButton url="{}">
              <TwitterIcon size={36} round />
            </TwitterShareButton>
            <WhatsappShareButton
              url={window.location.href}
              quote={"Dapatkan informasi lengkap stunting"}
              hashtag="#StuntingCenter"
            >
              <WhatsappIcon size={36} round />
            </WhatsappShareButton>
          </div>
        </div>
        <div className="sm:max-w-2xl w-full px-4">
          {article ? (
            <div key={article.id}>
              <h1 className="font-bold text-3xl">{article.title}</h1>
              <div className="flex flex-col sm:flex-row gap-2 text-slate-500 mb-4">
                <span>Oleh {article.author}</span>
                <span>{article.createdAt.split("T")[0]}</span>
              </div>
              <div className="space-y-10">
                <img
                  src={article.image}
                  alt="Article pilihan 1"
                  className="w-full"
                />
                <p>{article.content}</p>
              </div>
            </div>
          ) : (
            <div>Article not found</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ArticleDetail;
