import "./style.css";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg"
        aria-label="Offcanvas navbar large"
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar2"
            aria-controls="offcanvasNavbar2"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end offcanvas-size-sm text-bg-light"
            tabIndex="-1"
            id="offcanvasNavbar2"
            aria-labelledby="offcanvasNavbar2Label"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title text-700"
                id="offcanvasNavbar2Label"
              >
                BCR
              </h5>
              <button
                type="button"
                className="btn-close btn-close-dark"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link" href="#service">
                    Our Service
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#why-us">
                    Why Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#testimonial">
                    Testimonial
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#faq">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <button className="btn btn-primary">Register</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
