import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { loadUser } from '../features/authSlice';
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { getCurrentUser } from '../utils/localStorage';
import Swal from "sweetalert2";

function BmiCalculator() {
  const [namaInput, setNamaInput] = useState("");
  const [umurInput, setUmurInput] = useState("");
  const [tinggiInput, setTinggiInput] = useState("");
  const [beratInput, setBeratInput] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("Pria");
  const [result, setResult] = useState("");
  const [tinggiError, setTinggiError] = useState("");
  const [beratError, setBeratError] = useState("");
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.auth.userProfile);
  const [name, setName] = useState('');
  const [bmiResult, setBmiResult] = useState(0);
  const [bmiCategory, setBmiCategory] = useState("");
 const navigate = useNavigate();

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
      const bmiResult = (beratNum / (((tinggiNum / 100) * tinggiNum) / 100)).toFixed(2);

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
      if (jenisKelamin === "Pria") {
        genderString = "Pria";
      } else {
        genderString = "Wanita";
      }

      let bmiCategoryWomen = "";
      if (jenisKelamin === "Wanita"){
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
          jenisKelamin === "Wanita" ? bmiCategoryWomen : bmiCategory}`
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
      
      category: jenisKelamin === "Wanita" ? bmiCategoryWomen : bmiCategory,
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
      alert("Calculator Error");
      setResult("");
    }
};

  return (
    <>
      <Navbar/>
  <section className="min-h-screen flex flex-col justify-center px-6 py-8 bg-[#E6F7FF]">
        <div className="w-full bg-teal-500 rounded-lg shadow md:max-w-md mx-auto">
          <div className="p-6 space-y-4">
            <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl">
          BMI Kalkulator
        </h1>
        <form class="space-y-4 md:space-y-6">
          <div>
            <p class="block mb-2 text-sm font-medium text-gray-900" id="masukanNama">Nama Anda</p>
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
            <p class="block mb-2 text-sm font-medium text-gray-900" id="masukanUmur">Umur Anda</p>
            <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" type="number" value={umurInput} onChange={(e) => setUmurInput(e.target.value)} placeholder="20" />
          </div>
          <div>
            <p class="block mb-2 text-sm font-medium text-gray-900" id="jenisKelamin">Jenis Kelamin</p>
            <label class = "flex items-center mb-2">
              <input
                type="radio"
                name="jenisKelamin"
                value="Pria"
                checked={jenisKelamin === "Pria"}
                onChange={() => setJenisKelamin("Pria")}
              />
              <span class="ml-2">Pria</span>
            </label>
            <label class="flex items-center">
              <input
                type="radio"
                name="jenisKelamin"
                value="Wanita"
                checked={jenisKelamin === "Wanita"}
                onChange={() => setJenisKelamin("Wanita")}
                /> 
              <span class="ml-2">Wanita</span>
            </label>
          </div>
          <div>
            <p class="block mb-2 text-sm font-medium text-gray-900" id="tinggiBadan">Masukkan Tinggi badan anda (CM)</p>
            <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" type="number" value={tinggiInput} onChange={(e) => setTinggiInput(e.target.value)} placeholder="170" />
            <span id="tinggiError" style={{ color: "red" }}>
              {tinggiError}
            </span>
          </div>
          <div>
            <p class="block mb-2 text-sm font-medium text-gray-900" id="beratBadan">Masukkan Berat badan anda (KG)</p>
            <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" type="number" value={beratInput} onChange={(e) => setBeratInput(e.target.value)} placeholder="65" />
            <span id="beratError" style={{ color: "red" }}>
              {beratError}
            </span>
          </div>
          <div class="flex justify-center">
            <button class="bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" id="btn" type="button" onClick={calculateBMI}>
              Hitung
            </button>
          </div>
          <div>
                  <div>
                    <h4 class="block mb-2 text-sm font-medium text-gray-900">Hasil:</h4>
                    {result && (
                      <ul className="list-disc pl-6">
                        <li>Nama: {name}</li>
                        <li>Umur: {umurInput}</li>
                        <li>Jenis Kelamin: {jenisKelamin}</li>
                        <li>BMI: {bmiResult}</li>
                        <li>Kategory: {bmiCategory}</li>
                      </ul>
                    )}
                  </div>
          </div>
          <div>
              </div>
              <div className="flex justify-center">
                <NavLink
                  to="history"
                  className="bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  id="historyBtn"
                  >
                  Lihat Riwayat BMI
                </NavLink>
              </div>
        </form>
      </div>
    </div>
      </section>
      <Footer/>
    </>

  );
}

export default BmiCalculator;
