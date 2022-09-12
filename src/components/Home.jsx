import React, { useContext } from "react";
import "../styles/Home.css";
import "../styles/all.css";
import { ContextProvider } from "../reducer/context";
import { useEffect } from "react";
import { getAllMeals } from "./Function";
import { Link } from "react-router-dom";
import Loader from "./Loader";
function Home(props) {
  const { setIsClickLeft, addClassSettings, addClassLeft, posts, setData } =
    useContext(ContextProvider);
  useEffect(() => {
    getAllMeals().then((data) => {
      setData(data.categories);
    });
    // eslint-disable-next-line
  }, []);
  return (
    <>
        {posts.length ? (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark">
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
                    Taom menyulari
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="!#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Biz bilan bog'lanish
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#!">
                        <i class="fa-solid fa-phone"></i> Telefon orqali
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#!">
                        <i class="fa-solid fa-comments"></i> Chat orqali
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#!">
                        <i class="fa-solid fa-circle-question"></i> Yordam
                        markazi
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="!#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    ... haqida
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="https://github.com/JasurbekMashrabjonov/" target={`_blank`}>
                        <i class="fa-solid fa-file"></i> Web sahifa
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="https://github.com/JasurbekMashrabjonov/" target={`_blank`}>
                        <i class="fa-solid fa-code"></i> Developer
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#!">
                    Royxatdan o'tish
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section class="Tools">
          {/* <div class="savat">
            <i class="fa-solid fa-basket-shopping fa-2x"></i>
          </div> */}
          <div class="yuqoriga">
            <i class="fa-solid fa-circle-arrow-up fa-2x"></i>
          </div>
          <i
            class={`fa-solid fa-circle-chevron-left fa-2x ${addClassLeft}`}
            onClick={() => {
              setIsClickLeft();
            }}
          ></i>
          <div class={`Settings ${addClassSettings}`}>
            <i class="fa-brands fa-youtube fa-2x"></i>
            <i class="fa-brands fa-facebook fa-2x"></i>
            <i class="fa-brands fa-twitter fa-2x"></i>
            <i class="fa-solid fa-location-dot fa-2x"></i>
            <i class="fa-solid fa-clock fa-2x"></i>
          </div>
        </section>

        <section class="background1">
          <div class="background">
            <section class="Form">
              <div class="form_tab">
                <h2>Mazzali va yoqimli taomlar siz bilan.</h2>
                <div class="form">
                  <div class="form_item manzil">
                    <h4>Joylashuv</h4>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Manzil, pochta indeksi,shahar..."
                    />
                    <p>To'g'ri yetkazma uchun aniq manzilni kiriting</p>
                  </div>
                  <div class="form_item">
                    <h4>Sanasi</h4>
                    <input type="date" class="form-control bg-light" />
                  </div>
                  <div class="form_item">
                    <h4>Vaqti</h4>
                    <input
                      type="time"
                      placeholder="Vaqti"
                      class="form-control"
                    />
                  </div>
                  <div class="form_item btn_form">
                    <a class="btn btn1 btn2" href="#context">
                      Buyurtma berish
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section class="Content">
          <div className="context">
            {
              posts.map((item, idx) => {
                return (
                  <div className="card" key={idx}>
                    <img
                      src={item.strCategoryThumb}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.strCategory}</h5>
                      <p className="card-text">
                        {item.strCategoryDescription.slice(0, 25)}
                      </p>
                      <Link
                        to={`/category/${item.strCategory}`}
                        className="btn btn-primary"
                      >
                        Watch more
                      </Link>
                    </div>
                  </div>
                );
              })
            } 
          </div>
          <div class="Boglanish">
            <h3>Biz bilan hoziroq bog'laning: </h3>
            <a href="!#" class="a1">
              <i class="fa-solid fa-phone"></i> <u>90 567 55 20</u>
            </a>
          </div>
        </section>
        <footer class="footer gray-700">
          <p>&copy;2022 Copy reserved right; My email: <a href="mailto:bahtiyorjonuglu31@gmail.com">bahtiyorjonuglu31@gmail.com</a></p>
          <h5>Jasurbek Bahtiyorjon o'g'li</h5>
        </footer>
      </div>
        ): (
          <Loader />
        )}
    </>
  );
}

export default Home;
