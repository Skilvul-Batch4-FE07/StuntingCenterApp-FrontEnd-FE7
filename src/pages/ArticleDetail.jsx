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

function ArticleDetail() {
  const { articles, isLoading } = useContext(ArticleContext);
  const { id } = useParams();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const article = articles.find((article) => article.id === id);

  return (
    <div className="flex justify-center mt-20 gap-10">
      <div className="fixed left-52">
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
            hastag="#StuntingCenter"
          >
            <WhatsappIcon size={36} round />
          </WhatsappShareButton>
        </div>
      </div>
      <div className="sm:max-w-2xl">
        {article ? (
          <div key={article.id}>
            <h1 className="font-bold text-3xl">{article.title}</h1>
            <div className="flex gap-2 text-slate-500 mb-4">
              <span>Oleh {article.author}</span>
              <span>{article.createdAt.split("T")[0]}</span>
            </div>
            <div className="space-y-10">
              <img
                src={article.image}
                alt="Article pilihan 1"
                className="max-w-2xl"
              />
              <p>{article.content}</p>
            </div>
          </div>
        ) : (
          <div>Article not found</div>
        )}
      </div>
    </div>
  );
}

export default ArticleDetail;
