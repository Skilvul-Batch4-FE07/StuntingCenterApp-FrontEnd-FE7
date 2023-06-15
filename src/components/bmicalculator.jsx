import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { loadUser } from "../features/authSlice";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { getCurrentUser } from "../utils/localStorage";
import Swal from "sweetalert2";
import { AiOutlineArrowLeft } from "react-icons/ai";
import swal from "sweetalert";

function BmiCalculator() {
  const [bmiHistory, setBmiHistory] = useState([]);
  const [namaInput, setNamaInput] = useState("");
  const [umurInput, setUmurInput] = useState("");
  const [tinggiInput, setTinggiInput] = useState("");
  const [beratInput, setBeratInput] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState();
  const [result, setResult] = useState("");
  const [tinggiError, setTinggiError] = useState("");
  const [beratError, setBeratError] = useState("");
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.auth.userProfile);
  const [name, setName] = useState("");
  const [bmiResult, setBmiResult] = useState(0);
  const [bmiCategory, setBmiCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://6450b0c5a3221969114f68c0.mockapi.io/api/loginRegister/bmi")
      .then((response) => {
        setBmiHistory(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!userProfile && currentUser) {
      dispatch(loadUser());
    } else if (userProfile) {
      setName(userProfile.name);
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate, userProfile]);

  const calculateBMI = () => {
    event.preventDefault();
    const tinggiNum = parseInt(tinggiInput);
    const beratNum = parseInt(beratInput);

    if (isNaN(tinggiNum) || tinggiNum <= 0) {
      setTinggiError("Mohon isi data dengan angka");
    } else {
      setTinggiError("");
    }

    if (isNaN(beratNum) || beratNum <= 0) {
      setBeratError("Mohon isi data dengan angka");
    } else {
      setBeratError("");
    }

    if (tinggiNum > 0 && beratNum > 0) {
      const bmiResult = (
        beratNum /
        (((tinggiNum / 100) * tinggiNum) / 100)
      ).toFixed(2);

      let bmiCategory = "";
      if (bmiResult <= 18.4) {
        bmiCategory = "Underweight";
      } else if (bmiResult >= 18.6 && bmiResult < 24.9) {
        bmiCategory = "Normal";
      } else if (bmiResult >= 25 && bmiResult < 29.9) {
        bmiCategory = "Overweight";
      } else {
        bmiCategory = "Obesity";
      }

      let genderString = "";
      if (jenisKelamin === "Laki-laki") {
        genderString = "Laki-laki";
      } else {
        genderString = "Perempuan";
      }

      let bmiCategoryWomen = "";
      if (jenisKelamin === "Perempuan") {
        if (bmiResult <= 18.4) {
          bmiCategoryWomen = "Underweight";
        } else if (bmiResult >= 18.5 && bmiResult < 23.9) {
          bmiCategoryWomen = "Normal";
        } else if (bmiResult >= 24 && bmiResult < 28.9) {
          bmiCategoryWomen = "Overweight";
        } else {
          bmiCategoryWomen = "Obesity";
        }
      }

      setResult(
        `Nama: ${name}, Umur: ${umurInput},Jenis Kelamin: ${genderString}, BMI: ${bmiResult}, Kategori: ${
          jenisKelamin === "Perempuan" ? bmiCategoryWomen : bmiCategory
        }`
      );
      setBmiResult(bmiResult);
      setBmiCategory(bmiCategory);

      const data = {
        name: name,
        age: umurInput,
        gender: jenisKelamin,
        height: tinggiInput,
        weight: beratInput,
        result: bmiResult,

        category: jenisKelamin === "Perempuan" ? bmiCategoryWomen : bmiCategory,
      };

      axios
        .post(
          "https://6450b0c5a3221969114f68c0.mockapi.io/api/loginRegister/bmi",
          data
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Periksa kembali inputan anda",
      });
      setResult("");
    }
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen flex flex-col justify-center p-6 bg-[#E6F7FF]">
        <div className="grid grid-cols-2">
          <div className="w-full bg-teal-400 rounded-lg shadow md:max-w-md mx-auto">
            <div className="p-6 space-y-4">
              <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-xl">
                BMI Kalkulator
              </h1>
              <form className="space-y-4 md:space-y-4">
                <div>
                  <p
                    className="block mb-2 text-sm font-medium text-gray-900"
                    id="masukanNama"
                  >
                    Nama Anda
                  </p>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    type="text"
                    value={name}
                    onChange={(e) => setNamaInput(e.target.value)}
                    placeholder="Andi Law"
                    readOnly={!!name}
                    onClick={() => {
                      if (!name) {
                        Swal.fire({
                          title: "Login Required",
                          text: "Silahkan login terlebih dahulu untuk memasukkan nama.",
                          icon: "warning",
                          confirmButtonText: "OK",
                        });
                      }
                    }}
                  />
                </div>
                <div>
                  <p
                    className="block mb-2 text-sm font-medium text-gray-900"
                    id="masukanUmur"
                  >
                    Usia anak (Tahun)
                  </p>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    type="number"
                    value={umurInput}
                    onChange={(e) => setUmurInput(e.target.value)}
                    placeholder="2"
                  />
                </div>
                <div>
                  <p
                    className="block mb-2 text-sm font-medium text-gray-900"
                    id="jenisKelamin"
                  >
                    Jenis Kelamin
                  </p>
                  <div className="flex items-center gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="jenisKelamin"
                        value="Laki-laki"
                        checked={jenisKelamin === "Laki-laki"}
                        onChange={() => setJenisKelamin("Laki-laki")}
                      />
                      <span className="ml-2">Laki-laki</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="jenisKelamin"
                        value="Perempuan"
                        checked={jenisKelamin === "Perempuan"}
                        onChange={() => setJenisKelamin("Perempuan")}
                      />
                      <span className="ml-2">Perempuan</span>
                    </label>
                  </div>
                </div>
                <div>
                  <p
                    className="block mb-2 text-sm font-medium text-gray-900"
                    id="tinggiBadan"
                  >
                    Masukkan tinggi badan anak (CM)
                  </p>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    type="number"
                    value={tinggiInput}
                    onChange={(e) => setTinggiInput(e.target.value)}
                    placeholder="73"
                  />
                  <span id="tinggiError" style={{ color: "red" }}>
                    {tinggiError}
                  </span>
                </div>
                <div>
                  <p
                    className="block mb-2 text-sm font-medium text-gray-900"
                    id="beratBadan"
                  >
                    Masukkan berat badan anak (KG)
                  </p>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    type="number"
                    value={beratInput}
                    onChange={(e) => setBeratInput(e.target.value)}
                    placeholder="9"
                  />
                  <span id="beratError" style={{ color: "red" }}>
                    {beratError}
                  </span>
                </div>
                <div className="flex justify-end">
                  <button
                    className="bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={calculateBMI}
                  >
                    Hitung
                  </button>
                </div>
                </form>
                {result && (
                  <div>
                    <h4 className="mb-2 text-sm font-medium text-gray-900">
                      Hasil:
                    </h4>
                    <ul className="list-disc pl-6">
                      <li>Nama: {name}</li>
                      <li>Umur: {umurInput}</li>
                      <li>Jenis Kelamin: {jenisKelamin}</li>
                      <li>BMI: {bmiResult}</li>
                      <li>Kategori: {bmiCategory}</li>
                    </ul>
                  </div>
                )}

                {/* <div className="flex justify-center">
                  <NavLink
                    to="history"
                    className="bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    id="historyBtn"
                  >
                    Lihat Riwayat BMI
                  </NavLink>
                </div> */}
              
            </div>
          </div>
          <div className="bg-[#E6F7FF] flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-blue-200 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <div className="flex items-center">
                  <NavLink to="/bmi" className="text-gray-900">
                    <AiOutlineArrowLeft className="mr-2" />
                  </NavLink>
                </div>
                <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Riwayat BMI
                </h1>
                {bmiHistory.length > 0 ? (
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="border-b border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-900">
                          Nama
                        </th>
                        <th className="border-b border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-900">
                          Umur
                        </th>
                        <th className="border-b border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-900">
                          Jenis Kelamin
                        </th>
                        <th className="border-b border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-900">
                          BMI
                        </th>
                        <th className="border-b border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-900">
                          Kategori
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {bmiHistory.map((data) => (
                        <tr key={data.id}>
                          <td className="border-b border-gray-300 px-4 py-2 text-sm text-gray-900">
                            {data.name}
                          </td>
                          <td className="border-b border-gray-300 px-4 py-2 text-sm text-gray-900">
                            {data.age}
                          </td>
                          <td className="border-b border-gray-300 px-4 py-2 text-sm text-gray-900">
                            {data.gender}
                          </td>
                          <td className="border-b border-gray-300 px-4 py-2 text-sm text-gray-900">
                            {data.result}
                          </td>
                          <td className="border-b border-gray-300 px-4 py-2 text-sm text-gray-900">
                            {data.category}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className="text-gray-900">
                    Belum ada data BMI yang tersimpan.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default BmiCalculator;
