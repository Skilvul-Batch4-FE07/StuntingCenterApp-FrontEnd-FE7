import { useContext } from "react";
import { ArticleContext } from "../contexts/ArticleContext";
import { Link } from "react-router-dom";
import { Loader } from "../components/Loader";
import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ArticlePage = () => {
  const { articles, isLoading } = useContext(ArticleContext);
  dayjs.extend(relativeTime);
  dayjs.locale("id");

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar/>
    <div className="justify-center p-8 sm:px-24">
      <div>
        <h1 className="text-3xl font-bold mb-8">Artikel Pilihan</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="col-span-1">
            {articles
              ?.filter((article) => article.categori === "pilihan")
              .slice(0, 1)
              .map((article) => (
                <div key={article.id} className="mb-5">
                  <div className="max-w-3xl space-y-4">
                    <div className="relative">
                      <Link to={`/article/${article.id}`}>
                        <img
                          src={article.image}
                          alt={`article pilihan ${article.id}`}
                          className="rounded-lg"
                        />
                        <h2 className="absolute bottom-0 rounded-b-lg bg-gradient-to-t from-black bg-opacity-40 left-0 w-full px-4 py-4 text-white text-lg font-semibold sm:text-2xl">
                          {article.title}
                        </h2>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="changeArticle overflow-y-auto overflow-x-hidden">
            <div className="">
              {articles
                ?.filter((article) => article.categori === "pilihan")
                .map((article) => (
                  <div key={article.id} className="mb-4">
                    <Link to={`/article/${article.id}`}>
                      <div className="max-w-xl flex gap-3">
                        <img
                          src={article.image}
                          alt={`article pilihan ${article.id}`}
                          className="max-w-lg w-36 rounded-lg"
                        />
                        <div>
                          <h2 className="text-lg font-medium">
                            {article.title}
                          </h2>
                          <span className="text-md text-slate-500">
                            {dayjs(article.createdAt).fromNow()}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-8 mt-12">Artikel Terbaru</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
          {articles
            ?.filter((article) => article.categori === "terbaru")
            .map((article) => (
              <div
                key={article.id}
                className="max-w-md border-slate-300 border-2 rounded-lg gap-3 shadow-lg"
              >
                <Link to={`/article/${article.id}`}>
                  <img
                    src={article.image}
                    alt={`article terbaru ${article.id}`}
                    className="rounded-t-md"
                  />
                  <div className="m-2">
                    <h2 className="text-lg font-medium">{article.title}</h2>
                    <span className="text-md text-slate-500">
                      {dayjs(article.createdAt).fromNow()}
                    </span>
                    <p className="line-clamp-2">{article.description}</p>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
      </div>
      <Footer/>
      </>
  );
};

export default ArticlePage;
