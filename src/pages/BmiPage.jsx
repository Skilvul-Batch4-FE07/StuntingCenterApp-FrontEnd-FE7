import Footer from "../components/Footer";
import { HeroBmi } from "../components/bmi/HeroBmi";
import BmiCalculator from "../components/bmicalculator";
import NavbarPage from "../components/landingpage/NavbarPage";

const BmiPage = () => {
  return (
    <>
      <NavbarPage />
      <HeroBmi/>
      <BmiCalculator />
      <Footer />
    </>
  );
};

export default BmiPage;
