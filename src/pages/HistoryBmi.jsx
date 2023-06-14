import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const HistoryBmi = () => {
  const [bmiHistory, setBmiHistory] = useState([]);

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

  return (
    <>
      <Navbar />
      <section>
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
                <p className="text-gray-900">Belum ada data BMI yang tersimpan.</p>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HistoryBmi;
