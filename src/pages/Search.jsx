import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import "./style.css";
import Car from "../assets/mobil.png";

import Card from "./Card";

function Search() {
  //define state
  const [cars, setCars] = useState([]);
  const [capacity, setCapacity] = useState(0);
  const [type, setType] = useState("");

  //useEffect hook
  useEffect(() => {
    //panggil method "fetchData"
    fectData();
  }, []);

  //function "fetchData"
  const fectData = async () => {
    //fetching
    const response = await axios.get(
      "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
    );
    //get response data
    const data = await response.data;

    //assign response data to state "posts"
    setCars(data);
  };

  const filter = (data) => {
    if (capacity != 0 && type.length != 0) {
      return data.filter(
        (item) => String(item.available) == type && item.capacity >= capacity
      );
    }
    if (capacity != 0) {
      return data.filter((item) => item.capacity >= capacity);
    }
    if (type.length != 0) {
      return data.filter((item) => String(item.available) == type);
    }
    return [];
  };
  return (
    <>
      <Helmet>
        <title>BCR | Search Cars</title>
      </Helmet>
      <section className="hero" id="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <h1>Sewa & Rental Mobil Terbaik di kawasan Surabaya</h1>
              <p>
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <div className="car-img">
                <img src={Car} alt="" />
              </div>
              <div className="bg-block"></div>
            </div>
            <div className="search-box">
              <div className="row">
                <div className="col-md-3">
                  <label>Tipe Driver</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="driverType"
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option defaultValue="" hidden>
                      Pilih Tipe Driver
                    </option>
                    <option value="true">Dengan Sopir</option>
                    <option value="false">Tanpa Sopir(Lepas Kunci)</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label>Tanggal</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Pilih Tanggal"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                  />
                </div>
                <div className="col-md-3">
                  <label>Waktu Jemput/Ambil</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option defaultValue="" hidden>
                      Pilih Waktu
                    </option>
                    <option value="">08.00</option>
                    <option value="">09.00</option>
                    <option value="">10.00</option>
                    <option value="">11.00</option>
                    <option value="">12.00</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label>Jumlah Penumpang(opsional)</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Jumlah Penumpang"
                    onChange={(e) => setCapacity(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {<Card data={filter(cars)} />}
    </>
  );
}

export default Search;
