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

  const calculateBMI = () => {
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
      if (bmiResult <= 18.5) {
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
  
      setResult(`Nama: ${namaInput}, Umur: ${umurInput}, Jenis Kelamin: ${genderString}, BMI: ${bmiResult}, Kategori: ${bmiCategory}`);
    } else {
      alert("Calculator Error");
      setResult("");
    }
  };

  return (
    <div >
      <h1 >BMI Calculator</h1>
      <h4>Masukkan Tinggi dan Berat badan anda untuk mengetahui hasil dari BMI anda</h4>

      <p id="masukanNama">Masukkan Nama Anda</p>
      <input type="text" value={namaInput} onChange={(e) => setNamaInput(e.target.value)} placeholder="Andi law" />
      <br />

      <p id="masukanUmur">Masukkan Umur Anda</p>
      <input type="text" value={umurInput} onChange={(e) => setUmurInput(e.target.value)} placeholder="20" />
      <br />

      <p id="jenisKelamin">Jenis Kelamin</p>
      <label>
        <input
          type="radio"
          name="jenisKelamin"
          value="Pria"
          checked={jenisKelamin === "Pria"}
          onChange={() => setJenisKelamin("Pria")}
        />
        Pria
      </label>
      <label>
        <input
          type="radio"
          name="jenisKelamin"
          value="Wanita"
          checked={jenisKelamin === "Wanita"}
          onChange={() => setJenisKelamin("Wanita")}
        />
        Wanita
      </label>
      <br />

      <p id="tinggiBadan">Masukkan Tinggi badan anda (CM)</p>
      <input type="text" value={tinggiInput} onChange={(e) => setTinggiInput(e.target.value)} placeholder="170" />
      <span id="tinggiError" style={{ color: "red" }}>
        {tinggiError}
      </span>
      <br />

      <p id="beratBadan">Masukkan Berat badan anda (KG)</p>
      <input type="text" value={beratInput} onChange={(e) => setBeratInput(e.target.value)} placeholder="65" />
      <span id="beratError" style={{ color: "red" }}>
        {beratError}
      </span>
      <br />

      <button id="btn" onClick={calculateBMI}>
        Hitung
      </button>
      <h4>Hasil:</h4>
      <p id="resultAngka">{result}</p>
    </div>
  );
}

export default BmiCalculator;
