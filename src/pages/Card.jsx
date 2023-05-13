import React from "react";
import "./style.css";
import Capacity from "../assets/fi_users.png";
import Setting from "../assets/fi_settings.png";
import Calender from "../assets/fi_calendar.png";
import Car from "../assets/mobil2.png";

function Card({ data }) {
  return (
    <>
      <section className="result">
        <div className="container">
          <div className="row">
            {data.map((car) => (
              <div className="col-md-4">
                <div className="card">
                  <div className="card-header">
                    <img src={Car} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body mb-2">
                    <h5 className="card-title">
                      {car.manufacture} {car.model}
                    </h5>
                    <h2 className="card-price">Rp. {car.rentPerDay}</h2>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul className="card-detail">
                      <li>
                        <img src={Capacity} alt="" /> {car.capacity} Orang
                      </li>
                      <li>
                        <img src={Setting} alt="" /> {car.transmission}
                      </li>
                      <li>
                        <img src={Calender} alt="" /> {car.year}
                      </li>
                    </ul>
                    <div className="text-center d-grid">
                      <button
                        href="#"
                        className="btn btn-primary"
                        type="button"
                        style={
                            {height: 48}
                        }
                      >
                        Pilih Mobil
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Card;
