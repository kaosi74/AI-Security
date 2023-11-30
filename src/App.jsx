import "./App.css";
import logo from "./assets/logo-icon.svg";
import trade from "./assets/trade.jpg"
import pic from "./assets/channel_1.jpg";


function App() {
  return (
    <div>
      <div className="container-fluid px-4 firstSec">
        <div className="topNav">
          <div>
            <a className="navbar-brand logo" href="#">
              <img
                src={logo}
                alt="Logo"
                width="36"
                height="30"
                className="d-inline-block align-text-top"
              />
            </a>
          </div>
          <nav className="navbar navbar-expand-lg me-2">
            <div className="container-fluid">
              <a className="navbar-brand text-white" href="#">
                HOME
              </a>
              <button
                className="navbar-toggler bg-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      className="nav-link active text-white"
                      aria-current="page"
                      href="#"
                    >
                      SERVICES
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                      REVIEWS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                      PRICING
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white">CONTACT</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        {/* End of navbar */}

        <div className="intro">
          <h1>Meet Destiny, the visionary landing page.</h1>
          <p>
            Re-targeting your audience with competitive intelligence embedded in
            Destiny. See it in action and then believe.
          </p>
          <button type="button" className="btn btn-primary">
            WATCH INTRD
          </button>
        </div>
      </div>
      {/* New section */}

      <div className="container-fluid py-5 text-center sec">
        <div className="">
          <h4>
            Destiny Isnt&rsquo;t AI, it&rsquo;s the result of human
            intelligence.
          </h4>
          <p></p>
        </div>
        <div className="row py-5">
          <div className="col-12 col-md-4">
            <div className="cards">
              <i className="bi bi-phone icons btn btn-primary"></i>
              <h5>Highly Responsive</h5>
              <p>
                More fluidity in layouts and images in any part of the screen’s
                device.{" "}
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="cards">
              <i className="bi bi-lock icons btn btn-primary"></i>
              <h5>Built-in Security</h5>
              <p>
                Designed to give you comprehensive protection to your privacy.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="cards">
              <i className="bi bi-shield-check icons btn btn-primary"></i>
              <h5>Safety Lock</h5>
              <p>
                Increase operational efficiency while reducing operational and
                security costs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* New Section */}
      <div className="container-fluid px-5 py-5 brd">
        <div className="row mb-5">
          <div className="col-md-6">
            <img className="img-fluid" src={trade} />
          </div>
          <div className="col-md-6">
            <h4>Designed for Startups & brands.</h4>
            <p>
              Just get the code and sit tight, you will witness it&rsquo;s power
              and performance in lead generations. it&rsquo;s simple yet
              powerful and productive technology. Experience, then believe.
            </p>
            <div className="txt">
              <i className="bi bi-file-richtext"></i>
              <p>Write some feature here.</p>
            </div>
            <div className="txt">
              <i className="bi bi-file-richtext"></i>
              <p>Repeat the same with another one.</p>
            </div>
            <div className="txt">
              <i className="bi bi-file-richtext"></i>
              <p>Complete the list with the last.</p>
            </div>
            <button type="button" className="btn  btn-primary">
              WATCH INTRD
            </button>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-md-6">
            <h4>Designed for Startups & brands.</h4>
            <p>
              Just get the code and sit tight, you will witness it&rsquo;s power
              and performance in lead generations. it&rsquo;s simple yet
              powerful and productive technology. Experience, then believe.
            </p>
            <div className="txt">
              <i className="bi bi-file-richtext"></i>
              <p>Write some feature here.</p>
            </div>
            <div className="txt">
              <i className="bi bi-file-richtext"></i>
              <p>Repeat the same with another one.</p>
            </div>
            <div className="txt">
              <i className="bi bi-file-richtext"></i>
              <p>Complete the list with the last.</p>
            </div>
            <button type="button" className="btn  btn-primary mb-4">
              WATCH INTRD
            </button>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src={trade} />
          </div>
        </div>
      </div>

      {/* New section */}

      <div className="container-fluid text-center py-5">
        <img className="image mb-3" src={pic} />
        <p>
          “If you have everything under control, you’re not moving fast enough.”
        </p>
        <p>
          - Neil Young <br /> Vice President Primal Inc.
        </p>
        <div>
          <i className="bi bi-star-fill gd"></i>
          <i className="bi bi-star-fill gd"></i>
          <i className="bi bi-star-fill gd"></i>
          <i className="bi bi-star-fill gd"></i>
          <i className="bi bi-star-fill gd"></i>
        </div>
      </div>
    </div>
  );
}

export default App;
