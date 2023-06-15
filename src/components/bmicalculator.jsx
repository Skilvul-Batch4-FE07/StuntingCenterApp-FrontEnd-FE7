import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { loadUser } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../utils/localStorage";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function BmiCalculator() {
  const [bmiHistory, setBmiHistory] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [namaInput, setNamaInput] = useState("");
  const [ageBaby, setAgeBaby] = useState("");
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

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

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
      navigate("/login"); // Redirect to login page if userProfile.name is empty
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

      const currentDate = new Date();
      const selectedDateOfBirth = new Date(selectedDate);
      const ageDiff = Math.floor(
        (currentDate - selectedDateOfBirth) / (1000 * 60 * 60 * 24 * 30.44)
      );
      const years = Math.floor(ageDiff / 12);
      const months = ageDiff % 12;
      const ageBabyText =
        years !== 0 ? `${years} tahun ${months} bulan` : `${months} bulan`;
      setAgeBaby(ageBabyText);

      setResult(
        `Nama: ${name}, Usia anak: ${ageBaby}, Jenis Kelamin: ${genderString}, BMI: ${bmiResult}, Kategori: ${
          jenisKelamin === "Perempuan" ? bmiCategoryWomen : bmiCategory
        }`
      );

      setBmiResult(bmiResult);
      setBmiCategory(bmiCategory);

      const data = {
        name: name,
        age: `${years} tahun ${months} bulan`,
        gender: jenisKelamin,
        height: tinggiInput,
        weight: beratInput,
        result: bmiResult,
        category: jenisKelamin === "Perempuan" ? bmiCategoryWomen : bmiCategory,
        createdAt: Date.now(),
      };

      axios
        .post(
          "https://6450b0c5a3221969114f68c0.mockapi.io/api/loginRegister/bmi",
          data
        )
        .then((response) => {
          console.log(response);
          setBmiHistory([...bmiHistory, response.data]);
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
      <section className="justify-center p-8 sm:px-24">
        <div className="grid grid-cols-2">
          <div className="bg-teal-300 flex flex-col max-w-md rounded-lg">
            <div className="p-6 space-y-4">
              <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-xl">
                BMI Kalkulator
              </h1>
              <form className="space-y-3 md:space-y-4">
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
                  <h2>Tanggal Lahir:</h2>
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy"
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    placeholderText="Pilih Tanggal"
                    className="p-2 rounded-md"
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
            </div>
            <div>
              {result && (
                <div className="p-4 bg-slate-300 mx-6 mb-6 rounded-xl">
                  <h4 className="mb-2 text-sm font-medium text-gray-700">
                    Hasil:
                  </h4>
                  <ul className="list-disc pl-6">
                    <li>Nama: {name}</li>
                    <li>Usia: {ageBaby}</li>
                    <li>Jenis Kelamin: {jenisKelamin}</li>
                    <li>BMI: {bmiResult}</li>
                    <li>Kategori: {bmiCategory}</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col lg:py-0">
            <div className="space-y-4">
              <h1 className="text-lg font-bold text-center leading-tight tracking-tight md:text-xl">
                Riwayat BMI
              </h1>
              {bmiHistory.length > 0 ? (
                <div className="bg-gray-300 p-4 rounded-lg">
                  <table className="w-full border-collapse">
                    <thead className="text-md text-left font-medium text-gray-900">
                      <tr>
                        <th className="border-b border-gray-500 px-4">Nama</th>
                        <th className="border-b border-gray-500 px-4">Umur</th>
                        <th className="border-b border-gray-500 px-4">TB</th>
                        <th className="border-b border-gray-500 px-4">BB</th>
                        <th className="border-b border-gray-500 px-4">BMI</th>
                        <th className="border-b border-gray-500 px-4">
                          Kategori
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {bmiHistory.map((data) => (
                        <tr key={data.id} className="text-sm text-gray-900">
                          <td className="border-b border-gray-500 px-4 py-2 ">
                            {data.name}
                          </td>
                          <td className="border-b border-gray-500 px-4 py-2">
                            {data.age}
                          </td>
                          <td className="border-b border-gray-500 px-4 py-2">
                            {data.height}
                          </td>
                          <td className="border-b border-gray-500 px-4 py-2">
                            {data.weight}
                          </td>
                          <td className="border-b border-gray-500 px-4 py-2">
                            {data.result}
                          </td>
                          <td className="border-b border-gray-500 px-4 py-2">
                            {data.category}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-gray-900">
                  Belum ada data BMI yang tersimpan.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BmiCalculator;
