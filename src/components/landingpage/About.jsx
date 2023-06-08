import '../style/landingpage.css';

const About = () => {
  return (
    <>
      <section className="bg-white py-5" id="about">
        <div className="container py-lg-5">
          <div className="flex flex-col md:flex-row justify-center items-center mb-5">
            <div className="md:w-1/2 mb-4 ml-5 md:mb-0">
              <img
                src="https://i.postimg.cc/66HgKtmK/tentang-kami.jpg"
                className="w-3/4 rounded-lg "
                alt="imgabout"
              />
            </div>
            <div className="md:w-1/2 mr-5">
              <div data-aos="fade-up">
                <h3 className="font-bold mb-3 text-lg sm:text-xl">
                  Tentang Kami
                </h3>
                <h4 className="font-bold mb-3 text-2xl sm:text-4xl" style={{color : '#15acb1'}}>
                  Platform aplikasi untuk memberi kemudahan akses informasi stunting
                </h4>

                <p className="font-normal mb-3 text-lg sm:text-xl">
                  Stunting Informasi Center merupakan sebuah website yang bergerak di bidang kesehatan. Website ini
                  menyediakan berbagai fitur yang dapat digunakan secara gratis oleh pengguna. Stunting Information
                  Center hadir untuk berbagi informasi penting mengenai stunting kepada pengguna dan menyediakan ruang
                  diskusi bagi pengguna yang mengalami kesulitan, baik dalam pencegahan stunting maupun pengobatan stunting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
