function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          A Fauzan N
        </a>
        <button
          className="navbar-toggler"
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ms-3">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item ms-3">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item ms-3">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Jumbotron(props) {
  return (
    <section className="jumbotron text-center jumbotron-bg text-white">
      <img
        src="img/afauzann.jpg"
        alt="A Fauzan N"
        width="200px"
        className="rounded-circle img-thumbnail"
      />
      <h1 className="display-4">{props.name}</h1>
      <p className="lead">Student | Web Developer</p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f8f9fa"
          fill-opacity="1"
          d="M0,288L24,272C48,256,96,224,144,176C192,128,240,64,288,74.7C336,85,384,171,432,202.7C480,235,528,213,576,181.3C624,149,672,107,720,90.7C768,75,816,85,864,106.7C912,128,960,160,1008,170.7C1056,181,1104,171,1152,176C1200,181,1248,203,1296,229.3C1344,256,1392,288,1416,304L1440,320L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row text-center mb-3">
          <div className="col">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row justify-content-center fs-5">
          <div className="col-lg-4 mb-2 mx-3">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam enim vel repellendus cumque, nostrum natus, aut sequi
              optio ab temporibus nulla impedit mollitia! Amet facere reiciendis
              nisi fugit quis doloremque.
            </p>
          </div>
          <div className="col-lg-4 mb-2 mx-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              eaque nesciunt mollitia quis sed placeat voluptatum distinctio nam
              voluptate assumenda.
            </p>
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="jumbotron-bg"
      >
        <path
          fill="#f8f9fa"
          fill-opacity="1"
          d="M0,288L24,272C48,256,96,224,144,176C192,128,240,64,288,74.7C336,85,384,171,432,202.7C480,235,528,213,576,181.3C624,149,672,107,720,90.7C768,75,816,85,864,106.7C912,128,960,160,1008,170.7C1056,181,1104,171,1152,176C1200,181,1248,203,1296,229.3C1344,256,1392,288,1416,304L1440,320L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
        ></path>
      </svg>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="jumbotron-bg">
      <div className="container">
        <div className="row text-center mb-4 text-white">
          <div className="col">
            <h2>My Projects</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-3">
            <div className="card">
              <img
                src="img/projects/1.jpg"
                className="card-img-top"
                alt="Project 1"
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <img
                src="img/projects/2.jpg"
                className="card-img-top"
                alt="Project 2"
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <img
                src="img/projects/3.jpg"
                className="card-img-top"
                alt="Project 3"
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <img
                src="img/projects/4.jpg"
                className="card-img-top"
                alt="Project 4"
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <img
                src="img/projects/5.jpg"
                className="card-img-top"
                alt="Project 5"
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f8f9fa"
          fill-opacity="1"
          d="M0,288L24,272C48,256,96,224,144,176C192,128,240,64,288,74.7C336,85,384,171,432,202.7C480,235,528,213,576,181.3C624,149,672,107,720,90.7C768,75,816,85,864,106.7C912,128,960,160,1008,170.7C1056,181,1104,171,1152,176C1200,181,1248,203,1296,229.3C1344,256,1392,288,1416,304L1440,320L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}

function Contacts() {
  return (
    <section id="contact">
      <div className="container">
        <div className="row text-center">
          <div className="col mb-3">
            <h2>Contact Me</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div
              className="alert alert-dark alert-dismissible formAlert d-none"
              role="alert"
            >
              <strong>Terima kasih!</strong> Pesan anda berhasil dikirim.
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
            <form name="afn-portfolio-bs5">
              <div className="mb-3">
                <label for="name" className="form-label">
                  Name
                </label>
                <input
                  name="nama"
                  type="text"
                  className="form-control"
                  id="name"
                  aria-describedby="name"
                  placeholder="Please enter your full name..."
                  pattern="[A-Za-z\s']{2,}"
                  required
                />
                <p className="alert">Mohon masukkan nama.</p>
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="email"
                  placeholder="Please enter your email address..."
                  required
                />
                <p className="alert">Email tidak valid.</p>
              </div>
              <div className="mb-3">
                <label for="message" className="form-label">
                  Message
                </label>
                <textarea
                  name="pesan"
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Please enter your message..."
                  required
                ></textarea>
                <p className="alert">Mohon masukkan pesan.</p>
              </div>
              <button type="submit" className="btn btn-dark btnSubmit">
                Submit
              </button>
              <button
                className="btn btn-dark btnLoading d-none"
                type="button"
                disabled
              >
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#212529"
          fill-opacity="1"
          d="M0,288L24,272C48,256,96,224,144,176C192,128,240,64,288,74.7C336,85,384,171,432,202.7C480,235,528,213,576,181.3C624,149,672,107,720,90.7C768,75,816,85,864,106.7C912,128,960,160,1008,170.7C1056,181,1104,171,1152,176C1200,181,1248,203,1296,229.3C1344,256,1392,288,1416,304L1440,320L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}

function Footer(props) {
  return (
    <footer className="bg-dark text-white text-center pb-2">
      <p>
        Created with <i className="bi bi-heart-fill text-danger"></i> by
        <a
          href="https://www.instagram.com/fau.na_/"
          className="text-white fw-bold text-decoration-none"
        >
          {props.name}
        </a>
      </p>
    </footer>
  );
}

function MyApp() {
  const nama = "Ahmad Fauzan Najy";
  return (
    <>
      <Nav />
      <Jumbotron name={nama} />
      <About />
      <Projects />
      <Contacts />
      <Footer name={" " + nama} />
    </>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);
