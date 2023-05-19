import "./style.css";
import Capacity from "../assets/fi_users.png";
import Setting from "../assets/fi_settings.png";
import Calender from "../assets/fi_calendar.png";
import Car from "../assets/mobil2.png";

function Card({ data }) {
  if (data[0] == "DataKosong") {
    return (
      <section className="result">
        <div className="container">
          <div className="row"></div>
          <div className="alert alert-danger mt-5 text-center" role="alert">
            <h4 className="alert-heading text-bold">Mohon Maaf</h4>
            <hr />
            <h5 className="mb-0">Tidak Ada Mobil Yang Tersedia</h5>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <>
        <section className="result">
          <div className="container">
            <div className="row">
              {data.map((car) => (
                <div className="col-md-4" key={car.id}>
                  <div className="card">
                    <div className="card-header">
                      <img src={Car} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body mb-2">
                      <h5 className="card-title">
                        {car.manufacture} {car.model}
                      </h5>
                      <h2 className="card-price">
                        Rp.{" "}
                        {new Intl.NumberFormat("en-DE").format(car.rentPerDay)}{" "}
                        /Hari
                      </h2>
                      <p className="card-text">
                        {car.available
                          ? "Dengan Sopir"
                          : "Tanpa Sopir(Lepas Kunci)"}
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
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
                          style={{ height: 48 }}
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
}

export default Card;
