import React, { useState } from "react";


function BmiCalculator() {
  const [namaInput, setNamaInput] = useState("");
  const [umurInput, setUmurInput] = useState("");
  const [tinggiInput, setTinggiInput] = useState("");
  const [beratInput, setBeratInput] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("Pria");
  const [result, setResult] = useState("");
  const [tinggiError, setTinggiError] = useState("");
  const [beratError, setBeratError] = useState("");
 

  // Fungsi untuk menghitung result bmi berdasarkan inputan
  const calculateBMI = () => {
    event.preventDefault();
    const tinggiNum = parseInt(tinggiInput); // Mengubah nilai string menjadi integer
    const beratNum = parseInt(beratInput);  // Mengubah nilai string menjadi integer

    //check apakah inputan angka atau kurang dari nol
    if (isNaN(tinggiNum) || tinggiNum <= 0) {
      setTinggiError("Mohon isi data dengan angka");
    } else {
      setTinggiError("");
    }

    //check apakah inputan angka atau kurang dari nol
    if (isNaN(beratNum) || beratNum <= 0) {
      setBeratError("Mohon isi data dengan angka");
    } else {
      setBeratError("");
    }

    //perhitungan BMI dengan rumus BMI
    if (tinggiNum > 0 && beratNum > 0) {
      const bmiResult = (beratNum / (((tinggiNum / 100) * tinggiNum) / 100)).toFixed(2);

      //output kategori (pria)
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

    
  
      //menentukan gender berdasarkan inputan radio button
      let genderString = "";
      if (jenisKelamin === "Pria") {
        genderString = "Pria";
      } else {
        genderString = "Wanita";
      }

      //output kategori (wanita)
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

      //menyimpan seluruh hasil dengan state result
      setResult(
        `Nama: ${namaInput}, Umur: ${umurInput}, Jenis Kelamin: ${genderString}, BMI: ${bmiResult}, Kategori: ${
          jenisKelamin === "Wanita" ? bmiCategoryWomen : bmiCategory}`
      );
      
      // const dataBmi = {
      //   nama: namaInput,
      //   umur: umurInput,
      //   jenisKelamin,
      //   bmi: bmiResult,
      //   kategori: jenisKelamin === "Wanita" ? bmiCategoryWomen : bmiCategory,
      // };
      // axios
      //   .post("https://648846410e2469c038fd621b.mockapi.io/historybmi/", dataBmi)
      //   .then((Response)=>{
      //     console.log(Response);
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
      // axios.post('https://648846410e2469c038fd621b.mockapi.io/historybmi/', {
      //   nama : this.namaInput,
      //   bmiResult : this.bmiResult,
      //   kategori : this.jenisKelamin  === "Wanita" ? bmiCategoryWomen : bmiCategory
      // })
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
    } else {
      alert("Calculator Error");
      setResult("");
    }
};
    



  return (
  <section >
  <div class="bg-[#E6F7FF] flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div class="w-full bg-blue-200 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 class="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl">
          BMI Kalkulator
        </h1>
        <form class="space-y-4 md:space-y-6">
          <div>
            <p class="block mb-2 text-sm font-medium text-gray-900" id="masukanNama">Nama Anda</p>
            <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" type="text" value={namaInput} onChange={(e) => setNamaInput(e.target.value)} placeholder="Andi law" />
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
            <h4 class="block mb-2 text-sm font-medium text-gray-900">Hasil:</h4>
          </div>
          <div>
            <p >{result}</p>
          </div>
        </form>
      </div>
    </div>
  </div>
  </section>

  );
}

export default BmiCalculator;
