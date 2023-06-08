import '../style/landingpage.css'
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaHome, FaEnvelope, FaPhone } from 'react-icons/fa';
const Footer = () => {
    return (
        <>
        <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#05799D' , marginTop: '36px' }}>
        <div className="container p-4 pb-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="mt-3 mb-3">
                <h6 className="text-uppercase mb-4 font-bold text-xl">Stunting Center</h6>
                <p className="text-white font-normal text-base">
                Apabila terdapat kendala saat mengakses website, atau terdapat pelanggaran yang terjadi di forum diskusi.
                Silahkan hubungi kami melalui kontak berikut :
                </p>
                <div className="flex justify-center mt-4">
                <a href="#" className="btn btn-outline-light btn-floating m-1">
                    <FaFacebookF className="text-white" />
                </a>
                <a href="#" className="btn btn-outline-light btn-floating m-1">
                    <FaTwitter className="text-white" />
                </a>
                <a href="#" className="btn btn-outline-light btn-floating m-1">
                    <FaGoogle className="text-white" />
                </a>
                <a href="#" className="btn btn-outline-light btn-floating m-1">
                    <FaInstagram className="text-white" />
                </a>
                </div>
            </div>

            <div className="mt-3">
                <h6 className="mb-4 font-bold text-lg">Produk</h6>
                <p>
                <a href="/" className="text-white font-normal text-base">Home</a>
                </p>
                <p>
                <a href="/article" className="text-white font-normal text-base">Artikel</a>
                </p>
                <p>
                <a href="#" className="text-white font-normal text-base">
                    Tips Kesehatan
                </a>
                </p>
                <p>
                <a href="/forum" className="text-white font-normal text-base">Forum Diskusi</a>
                </p>
                <p>
                <a href="/bmi" className="text-white font-normal text-base">BMI</a>
                </p>
            </div>

            <div className="mt-3">
                <h6 className="mb-4 font-bold text-lg">Service</h6>
                <p>
                <a href="#" className="text-white font-normal text-base">Video</a>
                </p>
                <p>
                <a href="/article" className="text-white font-normal text-base">Artikel</a>
                </p>
                <p>
                <a href="/bmi" className="text-white font-normal text-base">Kalkulator BMI</a>
                </p>
                <p>
                <a href="/forum" className="text-white font-normal text-base">Stunting Talk</a>
                </p>
            </div>

            <div className="mt-3">
                <h6 className="mb-4 font-bold text-lg">Kontak kami</h6>
                <p>
                <FaHome className="mr-3" /> Semarang, Jawa Tengah, Indonesia
                </p>
                <p>
                <FaEnvelope className="mr-3" /> ahdan@gmail.com
                </p>
                <p>
                <FaPhone className="mr-3" /> +62823-2354-7423
                </p>
            </div>
            </div>
        </div>
        </footer>
        </>
    )
}

export default Footer;