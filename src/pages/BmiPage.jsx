import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { HeroBmi } from "../components/bmi/HeroBmi";
import BmiCalculator from "../components/bmicalculator";
// import NavbarPage from "../components/landingpage/NavbarPage";

const BmiPage = () => {
  return (
    <>
      <Navbar />
      <HeroBmi/>
      <BmiCalculator />
      <Footer />
    </>
  );
};

export default BmiPage;
