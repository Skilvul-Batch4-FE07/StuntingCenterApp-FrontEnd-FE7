import { FaStar, FaStarHalfAlt , FaQuoteRight} from 'react-icons/fa';

const Forum = () => {
  return (
    <section className="container-form py-20">
      <h4 className="font-bold mb-3 text-4xl" style={{ fontSize: '40px', color: '#019398', textAlign: 'left' }}>
        Forum Diskusi
      </h4>
      <div className="box-container flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4">
          <div className="box box-lg">
            <FaQuoteRight className="quote-icon" />
            <div className="user flex-center">
              <img src="https://i.postimg.cc/j5tmx5Tx/pic1.jpg flex-center" alt="" />
              <h3>Alfon Mugi</h3>
              <div className="flex items-center stars">
                <FaStar className="mr-1" />
                <FaStar className="mr-1" />
                <FaStar className="mr-1" />
                <FaStarHalfAlt className="mr-1" />
              </div>
              <div className="comment">
                Apa yang bisa dilakukan untuk mencegah stunting pada anak, baik dari segi nutrisi maupun faktor lingkungan?
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4">
          <div className="box box-lg">
            <FaQuoteRight className="quote-icon" />
            <div className="user flex-center">
              <img src="https://i.postimg.cc/NMvY1BwS/pic2.jpg" alt="" />
              <h3>Iza Fitroh</h3>
              <div className="flex items-center stars">
                <FaStar className="mr-1" />
                <FaStar className="mr-1" />
                <FaStar className="mr-1" />
                <FaStar className="mr-1" />
              </div>
              <div className="comment">
                Apa strategi intervensi yang efektif dalam mengatasi stunting pada anak? Apakah program pemberian makanan
                tambahan atau program pendidikan kesehatan nutrisi dapat membantu mengurangi kasus stunting pada anak?
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4">
          <div className="box box-lg">
            <FaQuoteRight className="quote-icon text-right flex-1" />
            <div className="user flex-center">
              <img src="https://i.postimg.cc/tR5yVKvv/pic3.jpg" alt="" />
              <h3>Aini Nur</h3>
              <div className="flex items-center stars">
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
      <a href="forum.html" className="btn py-3 px-5 pt-3 text-xl" style={{ fontSize: '16px', marginTop: '26px', marginBottom: '26px' }}>
        Gabung Yuk
      </a>
    </section>
  );
}

export default Forum;
