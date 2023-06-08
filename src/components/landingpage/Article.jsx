import '../style/landingpage.css'

const Article = () => {
    return (
        <>
            <section className="bg-gray-300 py-16">
      <div className="container">
        <div className="row">
          {/* Kolom kiri */}
          <div className="col-md-6">
            <h4 className="font-bold mb-4 text-3xl text-teal-500 pb-8">Dapatkan Artikel Menarik Dari Kami</h4>
            <div className="card w-full overflow-hidden bg-teal-500 rounded-l-xl">
              <img
                src="https://i.postimg.cc/8kF9TqQr/rice.jpg"
                className="card-img-top object-cover"
                alt="gambar anda"
              />
              <div className="card-body pt-3">
                <h5 className="card-title text-white">Keterkaitan antara Stunting dan Budaya Makan Nasi di Masyarakat</h5>
                <p className="card-text text-white"># Trending 1</p>
              </div>
            </div>
            <a
              href="article.html"
              className="btn py-3 px-5 pt-3 text-lg mt-8 mb-8"
              style={{ fontSize: '16px' }}
            >
              Lihat Selengkapnya
            </a>
          </div>
          
        </div>
      </div>
    </section>
        </>
    )
}
export default Article