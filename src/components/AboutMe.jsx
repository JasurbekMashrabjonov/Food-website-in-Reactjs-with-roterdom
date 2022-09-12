import React from "react";
import "../styles/Home.css";
import me from "../img/me.jpg";
import sayt1 from "../img/sayt1.png";
import sayt2 from "../img/sayt2.png";
import taklif1 from "../img/taklif1jfif.jfif"
import taklif2 from "../img/taklif2.jfif"
// import taklif4 from "../img/taklif4.jfif"
import taklif3 from "../img/taklif3.jfif"
import "../styles/all.css";
function AboutMe(props) {
  return (
    <>
      <div>
        <nav class="navbar about_nav navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#!">
              LOGO
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="index.html"
                  >
                    Home
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#!">
                    Xizmatlar
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#!">
                    Loyihalarim
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#!">
                    Foydali takliflar
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#!">
                    Bog'lanish
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section className="content_about">
          <div className="about_title">
            <div className="box">
              <div className="box_info">
                <h4>Assalomu alaykum</h4>
                <h1>Men Bahtiyorjon o'g'li</h1>
                <h3>Web Developer & Designer</h3>
                <p>
                  Ushbu web-loyiha kaminaning ijod mahsulimdir.Umid qilamanki,
                  Sayt sizga biroz bo'lsada foydali bo'ldi. Agar mening ishim
                  sizga manzur bo'lgan bo'sa <a href="#takliflar">Takliflar</a>
                  bo'limiga o'ting va men bilan bog'laning.
                </p>
                <button className=" btn_about">Bog'lanish</button>
              </div>
            </div>
            <div className="me_img">
              <img src={me} alt="Me_img" />
            </div>
          </div>
        </section>
        <div className="Xizmatlar" id="Xizmatlar">
          <h4 className="title_menu">Xizmatlar</h4>
          <div className="row2">
            <div class="card">
              {/* <img src="..." class="card-img-top" alt="..." /> */}
              <i class="fa-solid fa-palette"></i>
              <div class="card-body">
                <hr />

                <h4>Web-Dizayner</h4>
                <p class="card-text">
                  Eng betakror va zamoaviy marketing talablariga javob beradigan
                  dizaynlar biz bilan.
                </p>
              </div>
            </div>
            <div class="card">
              {/* <img src="..." class="card-img-top" alt="..." /> */}
              <i class="fa-solid fa-file-code"></i>
              <div class="card-body">
                <hr />

                <h4>Web-Dasturchi</h4>

                <p class="card-text">
                  Xatosiz, kamchiliklarsiz, eng tez fursatda mukammal loyihalar
                  biz bilan.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="Loyihalar" id="Loyihalar">
          <h4 className="title_menu">Loyihalar</h4>
          <div className="row2">
            <div>
              <div className="img_box">
                <img src={sayt1} alt="site" />
              </div>
              <br />
              <a href="!#" className="btn btn-info">
                Saytni ko'rish
              </a>
            </div>
            <div>
              <div className="img_box">
                <img src={sayt2} alt="site" />
              </div>
              <br />
              <a href="!#" className="btn btn-info">
                Saytni ko'rish
              </a>
            </div>
          </div>
        </div>
        <div className="Takliflar" id="Takliflar">
          <h4 className="title_menu">Takliflar</h4>
            <div className="Takliflar_carusel">
            <div
            id="carouselExampleDark"
            class="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img src={taklif1} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src={taklif2} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={taklif3} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
            </div>
          <div className=""></div>
        </div>
        <div className="Boglanish">
        
        </div>
        <footer class="footer gray-700">
        <p>&copy;2022 Copy reserved right;</p>
        <h5>Jasurbek Bahtiyorjon o'g'li tomonidan loyihalandi</h5>
      </footer>
      </div>
    </>
  );
}

export default AboutMe;
