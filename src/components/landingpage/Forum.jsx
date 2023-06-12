import { FaStar, FaStarHalfAlt, FaQuoteRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Forum = () => {
  return (
    <section className="py-10 flex flex-wrap items-center justify-center md:m-16 mx-4">
      <div>
        <h4 className="font-bold mb-2 md:text-3xl text-xl text-center text-teal-600">
          Forum Diskusi Stunting
        </h4>
        <p className="md:max-w-2xl max-w-full text-center md:text-lg text-base text-slate-800 mb-4">
          Forum diskusi terbukti dapat membantu mencari solusi penanganan
          stunting, jika anda tau lebih banyak mengenai stunting bergabunglah
          bersama kami
        </p>
      </div>
      <div className="flex flex-wrap justify-center ">
        <div className="w-full mb-4 md:w-1/2 lg:w-1/3">
          <div className="box-lg bg-white m-4 p-4 w-auto text-center relative border-2 border-slate-400 shadow-md rounded-xl">
            <FaQuoteRight className="absolute top-4 right-8 text-sm text-slate-600 opacity-10" />
            <div className="user flex-col">
              <img
                className="mx-auto w-20 h-20 rounded-full"
                src="https://i.postimg.cc/j5tmx5Tx/pic1.jpg"
                alt=""
              />
              <h3 className="text-center">Alfon Mugi</h3>
              <div className="flex items-center justify-center gap-1 py-2">
                <FaStar className="mr-1" />
                <FaStar className="mr-1" />
                <FaStar className="mr-1" />
                <FaStarHalfAlt className="mr-1" />
              </div>
              <div className="text-center">
                Apa yang bisa dilakukan untuk mencegah stunting pada anak, baik
                dari segi nutrisi maupun faktor lingkungan?
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mb-4 md:w-1/2 lg:w-1/3">
          <div className="box-lg bg-white m-4 p-4 w-auto text-center relative border-2 border-slate-400 shadow-md rounded-xl">
            <FaQuoteRight className="absolute top-4 right-8 text-sm text-slate-600 opacity-10" />
            <div className="user flex-col">
              <img
                className="mx-auto w-20 h-20 rounded-full"
                src="https://i.postimg.cc/j5tmx5Tx/pic1.jpg"
                alt=""
              />
              <h3 className="text-center">Alfon Mugi</h3>
              <div className="flex items-center justify-center gap-1 py-2">
                <FaStar className="mr-1" />
                <FaStar className="mr-1" />
                <FaStar className="mr-1" />
                <FaStarHalfAlt className="mr-1" />
              </div>
              <div className="text-center">
                Apa yang bisa dilakukan untuk mencegah stunting pada anak, baik
                dari segi nutrisi maupun faktor lingkungan?
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mb-4 md:w-1/2 lg:w-1/3">
          <div className="box-lg bg-white m-4 p-4 w-auto text-center relative border-2 border-slate-400 shadow-md rounded-xl">
            <FaQuoteRight className="absolute top-4 right-8 text-sm text-slate-600 opacity-10" />
            <div className="user flex-col">
              <img
                className="mx-auto w-20 h-20 rounded-full"
                src="https://i.postimg.cc/j5tmx5Tx/pic1.jpg"
                alt=""
              />
              <h3 className="text-center">Alfon Mugi</h3>
              <div className="flex items-center justify-center gap-1 py-2">
                <FaStar className="mr-1" />
                <FaStar className="mr-1" />
                <FaStar className="mr-1" />
                <FaStarHalfAlt className="mr-1" />
              </div>
              <div className="text-center">
                Apa yang bisa dilakukan untuk mencegah stunting pada anak, baik
                dari segi nutrisi maupun faktor lingkungan?
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="py-3 px-5 text-lg bg-gradient-to-r from-teal-600 to-teal-300 rounded-full font-semibold text-white">
        <NavLink to="/forum">Baca Selengkapnya</NavLink>
      </button>
    </section>
  );
};

export default Forum;
