import "./style.css";
import logo from "../assets/logo.png";
import facebook from "../assets/fb.png";
import instagram from "../assets/ig.png";
import twitter from "../assets/twitter.png";
import mail from "../assets/mail.png";
import twitch from "../assets/twitch.png";

function Footer() {
  return (
    <div className="container">
      <footer className="footer">
        <div className="row">
          <div className="col-md-3">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div className="col-md-2">
            <a href="#service">
              <p className="p-href">Our services</p>
            </a>
            <a href="#why-us">
              <p className="p-href">Why Us</p>
            </a>
            <a href="#testimonial">
              <p className="p-href">Testimonial</p>
            </a>
            <a href="#faq">
              <p className="p-href">FAQ</p>
            </a>
          </div>
          <div className="col-md-4">
            <p>Connect with us</p>
            <div className="d-inline">
              <a href="">
                <img src={facebook} alt="" />
              </a>
              <a href="">
                <img src={instagram} alt="" />
              </a>
              <a href="">
                <img src={twitter} alt="" />
              </a>
              <a href="">
                <img src={mail} alt="" />
              </a>
              <a href="">
                <img src={twitch} alt="" />
              </a>
            </div>
            <br />
          </div>
          <div className="col-md-3">
            <p>Copyright Binar 2022</p>
            <img src={logo} alt="" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
