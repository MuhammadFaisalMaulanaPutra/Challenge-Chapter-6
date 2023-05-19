import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./style.css";
import { Helmet } from "react-helmet";
import Car from "../assets/mobil.png";
import Service from "../assets/service.png";
import Check from "../assets/check.png";
import Complete from "../assets/complete.png";
import Price from "../assets/price.png";
import Hours from "../assets/24hrs.png";
import Professional from "../assets/professional.png";
import Photo1 from "../assets/photo1.png";
import Photo2 from "../assets/photo2.png";

function Home() {
  return (
    <>
      <Helmet>
        <title>BCR | Home</title>
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
              <a className="btn btn-primary" href="/cars">
                Mulai Sewa Mobil
              </a>
            </div>
            <div className="col-12 col-md-6">
              <div className="car-img">
                <img src={Car} alt="" />
              </div>
              <div className="bg-block"></div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <section className="service" id="service">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-center">
              <img src={Service} alt="" />
            </div>
            <div className="col-12 col-md-5">
              <h2>Best Car Rental for any kind of trip in Surabaya!</h2>
              <p>
                Sewa mobil di Surabaya bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <ul className="service-list">
                <li>
                  <img className="me-3" src={Check} alt="" /> Sewa Mobil Dengan
                  Supir di Bali 12 Jam
                </li>
                <li>
                  <img className="me-3" src={Check} alt="" /> Sewa Mobil Lepas
                  Kunci di Bali 24 Jam
                </li>
                <li>
                  <img className="me-3" src={Check} alt="" /> Sewa Mobil Jangka
                  Panjang Bulanan
                </li>
                <li>
                  <img className="me-3" src={Check} alt="" /> Gratis Antar -
                  Jemput Mobil di Bandara
                </li>
                <li>
                  <img className="me-3" src={Check} alt="" /> Layanan Airport
                  Transfer / Drop In Out
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="why-us" id="why-us">
          <h1 className="title">Why us?</h1>
          <h5 className="sub-title">Mengapa harus pilih Binar Car Rental?</h5>
          <div className="row">
            <div className="col-12 col-md-3">
              <div className="card-whyus">
                <img src={Complete} alt="" />
                <h1>Mobil Lengkap</h1>
                <p>
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                  terawat
                </p>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="card-whyus">
                <img src={Price} alt="" />
                <h1>Harga Murah</h1>
                <p>
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan
                  rental mobil lain
                </p>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="card-whyus">
                <img src={Hours} alt="" />
                <h1>Layanan 24 Jam</h1>
                <p>
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                  tersedia di akhir minggu
                </p>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="card-whyus">
                <img src={Professional} alt="" />
                <h1>Sopir Profesional</h1>
                <p>
                  Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                  tepat waktu
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="testimonial" id="testimonial">
        <h1>Testimonial</h1>
        <h5>Berbagai review positif dari para pelanggan kami</h5>
        <OwlCarousel
          className="owl-carousel owl-theme"
          margin={30}
          items={2.2}
          loop
          nav
          dots={false}
          center
          mergeFit
          navText={[
            "<img src='src/assets/left-btn.png'>",
            "<img src='src/assets/right-btn.png'>",
          ]}
        >
          <div className="item">
            <div className="carousel-card">
              <div className="row align-items-center">
                <div className="col-md-3">
                  <img src={Photo1} alt="" />
                </div>
                <div className="col-md-9">
                  <span className="star">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </span>
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <p className="card-name">John Dee 32, Bromo</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="carousel-card">
              <div className="row align-items-center">
                <div className="col-md-3">
                  <img src={Photo2} alt="" />
                </div>
                <div className="col-md-9">
                  <span className="star">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </span>
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <p className="card-name">John Dee 32, Bromo</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="carousel-card">
              <div className="row align-items-center">
                <div className="col-md-3">
                  <img src={Photo1} alt="" />
                </div>
                <div className="col-md-9">
                  <span className="star">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </span>
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <p className="card-name">John Dee 32, Bromo</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="carousel-card">
              <div className="row align-items-center">
                <div className="col-md-3">
                  <img src={Photo2} alt="" />
                </div>
                <div className="col-md-9">
                  <span className="star">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </span>
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <p className="card-name">John Dee 32, Bromo</p>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </section>

      <div className="container">
        <section className="get-started">
          <div className="get-start text-center">
            <div className="gs-content">
              <h1>Sewa Mobil di Surabaya Sekarang</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="btn btn-primary">Mulai Sewa Mobil</button>
            </div>
          </div>
        </section>

        <section className="faq" id="faq">
          <div className="row">
            <div className="col-md-5">
              <h1 className="title">Frequently Asked Question</h1>
              <p className="sub-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <div className="col-md-7">
              <div id="accordionExample">
                <div className="accordion mb-4">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        Apa saja syarat yang dibutuhkan?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Amet, commodi tenetur architecto sequi sunt
                          suscipit inventore in distinctio ut quasi at
                          dignissimos sit aliquam ipsum accusamus maiores fuga
                          quod? Rem impedit sint alias aperiam ullam quaerat
                          corporis consequatur et ipsa repellat recusandae odio
                          exercitationem, corrupti eos voluptates error itaque
                          ipsam.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion mb-4">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Berapa hari minimal sewa mobil lepas kunci?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Amet, commodi tenetur architecto sequi sunt
                          suscipit inventore in distinctio ut quasi at
                          dignissimos sit aliquam ipsum accusamus maiores fuga
                          quod? Rem impedit sint alias aperiam ullam quaerat
                          corporis consequatur et ipsa repellat recusandae odio
                          exercitationem, corrupti eos voluptates error itaque
                          ipsam.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion mb-4">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Berapa hari sebelumnya sabaiknya booking sewa mobil?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Amet, commodi tenetur architecto sequi sunt
                          suscipit inventore in distinctio ut quasi at
                          dignissimos sit aliquam ipsum accusamus maiores fuga
                          quod? Rem impedit sint alias aperiam ullam quaerat
                          corporis consequatur et ipsa repellat recusandae odio
                          exercitationem, corrupti eos voluptates error itaque
                          ipsam.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion mb-4">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Apakah Ada biaya antar-jemput?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Amet, commodi tenetur architecto sequi sunt
                          suscipit inventore in distinctio ut quasi at
                          dignissimos sit aliquam ipsum accusamus maiores fuga
                          quod? Rem impedit sint alias aperiam ullam quaerat
                          corporis consequatur et ipsa repellat recusandae odio
                          exercitationem, corrupti eos voluptates error itaque
                          ipsam.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion mb-4">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Bagaimana jika terjadi kecelakaan
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Amet, commodi tenetur architecto sequi sunt
                          suscipit inventore in distinctio ut quasi at
                          dignissimos sit aliquam ipsum accusamus maiores fuga
                          quod? Rem impedit sint alias aperiam ullam quaerat
                          corporis consequatur et ipsa repellat recusandae odio
                          exercitationem, corrupti eos voluptates error itaque
                          ipsam.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
