import { NavLink } from 'react-router-dom';
import '../style/landingpage.css'
import { FaBook, FaCalculator, FaComments } from 'react-icons/fa';

const HeroBanner = () => {
  return (
    <>
      <div className="main">
        <section className="bg-none" id="home">
          <div className="container py-5">
            <div className="row items-center mt-5">
              <div className="col-md-7 pt-md-5 text-center md:text-start" data-aos="fade-up">
                <h1 className="font-semibold mb-4 text-3xl md:text-5xl">
                  Stunting<br />
                  <span className="text-center">Information Center</span>
                </h1>
                <p className="text-lg mb-8">Langkah Kecil Menuju Dampak Besar</p>
                <NavLink to="/login" id="button-login" className="btn py-4 px-7 font-semibold text-sm">Get Started</NavLink>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="features bg-white">
  <div className="flex flex-wrap justify-center">
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
      <div className="card1 bg-gray-200 rounded-lg shadow-md pt-6 pb-8">
        <div className="card-body p-4">
          <span className="material-symbols-outlined text-5xl"><FaCalculator className="text-green-500" size={58} /></span>
          <h3 className="font-semibold text-2xl mt-4">DAPATKAN INFORMASI MENGENAI BERAT BADAN IDEALMU</h3>
          <p>
            Temukan potensi kesehatanmu! Gunakan fitur BMI kami untuk memantau kebugaran tubuhmu
          </p>
          <NavLink to="/bmi" className="btn-features rounded-pill py-2 px-4 border-2 font-semibold text-sm">Hitung Sekarang</NavLink>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
      <div className="card2 bg-gray-200 rounded-lg shadow-md">
        <div className="card-body p-4">
          <span className="material-symbols-outlined text-5xl"><FaBook className="text-blue-500" style={{ fontSize: 58 }} /></span>
          <h3 className="font-semibold text-2xl mt-4">KAMU BISA TEMUKAN INFORMASI STUNTING LENGKAP DISINI</h3>
          <p>
            Dapatkan informasi mengenai stunting, pencegahan serta pengobatan stunting lengkap disini.
          </p>
          <NavLink to="/artikel" className="btn-features rounded-pill py-2 px-4 border-2 font-semibold text-sm">Lihat Sekarang</NavLink>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
      <div className="card3 bg-gray-200 rounded-lg shadow-md pt-6 pb-8">
        <div className="card-body p-4">
          <span className="material-symbols-outlined text-5xl"><FaComments className="text-purple-500" style={{ fontSize: 58 }} /></span>
          <h3 className="font-semibold text-2xl mt-4">MULAI DISKUSI DENGAN ORANG BERPENGALAMAN</h3>
          <p>
            Anda dapat berdiskusi dengan seluruh orang di Indonesia, ajukan pertanyaan atau jawab pertanyaan terkait stunting
          </p>
          <NavLink to="/forum" className="btn-features rounded-pill py-2 px-4 border-2 font-semibold text-sm">Gabung Sekarang</NavLink>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default HeroBanner;