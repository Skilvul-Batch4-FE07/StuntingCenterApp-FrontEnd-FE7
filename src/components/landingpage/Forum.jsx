import { FaStar, FaStarHalfAlt , FaQuoteRight} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Forum = () => {
  return (
    <section className="container-form py-10">
      <h4 className="font-bold mb-5 text-4xl text-center" style={{ fontSize: '40px', color: '#019398'}}>
        Forum Diskusi
      </h4>
      <div className="box-container flex flex-wrap justify-center ">
        <div className="w-full mb-4 md:w-1/2 lg:w-1/3">
            <div className="box box-lg">
              <FaQuoteRight className="quote-icon" />
              <div className="user c flex-col">
                <img className="mx-auto" src="https://i.postimg.cc/j5tmx5Tx/pic1.jpg" alt="" />
                <h3 className="text-center">Alfon Mugi</h3>
                <div className="flex items-center justify-center stars">
                  <FaStar className="mr-1" />
                  <FaStar className="mr-1" />
                  <FaStar className="mr-1" />
                  <FaStarHalfAlt className="mr-1" />
                </div>
                <div className="comment text-center">
                  Apa yang bisa dilakukan untuk mencegah stunting pada anak, baik dari segi nutrisi maupun faktor lingkungan?
                </div>
              </div>
            </div>
          </div>

        <div className="w-full mb-4 md:w-1/2 lg:w-1/3">
          <div className="box box-lg">
            <FaQuoteRight className="quote-icon" />
            <div className="user flex-center flex-col">
              <img className="mx-auto" src="https://i.postimg.cc/NMvY1BwS/pic2.jpg" alt="" />
              <h3 className="text-center">Iza Fitroh</h3>
              <div className="flex items-center justify-center stars">
                <FaStar className="mr-1" />
                <FaStar className="mr-1" />
                <FaStar className="mr-1" />
                <FaStar className="mr-1" />
              </div>
              <div className="comment text-center">
                Apa strategi intervensi yang efektif dalam mengatasi stunting pada anak? Apakah program pemberian makanan
                tambahan atau program pendidikan kesehatan nutrisi dapat membantu mengurangi kasus stunting pada anak?
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mb-4 md:w-1/2 lg:w-1/3">
          <div className="box box-lg">
            <FaQuoteRight className="quote-icon " />
            <div className="user flex-center flex-col">
              <img className="mx-auto" src="https://i.postimg.cc/tR5yVKvv/pic3.jpg" alt="" />
              <h3 className="text-center">Aini Nur</h3>
              <div className="flex items-center justify-center stars">
                <FaStar className="mr-1" />
                <FaStar className="mr-1" />
                <FaStar className="mr-1" />
                <FaStar className="mr-1" />
                <FaStar className="mr-1" />
                </div>

              <div className="comment">
                Apakah program pemberian makanan tambahan atau program pendidikan kesehatan nutrisi dapat membantu
                mengurangi kasus stunting pada anak?
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavLink to="forum" className="btn py-3 px-5 pt-3 text-xl" style={{ fontSize: '16px', marginTop: '26px', marginBottom: '26px' }}>
        Gabung Yuk
      </NavLink>
    </section>
  );
}

export default Forum;
