import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ContextProvider } from "../reducer/context";
import { getId } from "./Function";
import Loader from "./Loader";
function IdMeal(props) {
  const navigate = useNavigate();
  const { name, setName } = useContext(ContextProvider);
  const { id } = useParams();
  useEffect(() => {
    getId(id).then((data) => {
      setName(data.meals);
    });
    // eslint-disable-next-line
  }, [id]);
  console.log(name);
  return (
    <>
      {name.length ? (
        <div>
          <div className="navigate" style={{ textAlign: "left" }}>
            <button
              className="btn btn-danger"
              onClick={() => {
                navigate(-1);
              }}
              style={{ margin: "10px 20px" }}
            >
              Go Back
            </button>
          </div>
          {name.map((item, idx) => {
            return (
              <div className="info" key={idx}>
                <h2>{item.strMeal}</h2>
                <hr />
                <div className="row112">
                  <div className="img">
                    <img src={`${item.strMealThumb}`} alt="img" />
                  </div>
                  <div className="info_post">
                    <h5>
                      Qayerda birinchi tayyorlangan yoki uning vatani:
                      {item.strArea}
                    </h5>
                    <p>
                      <b>Tarkibiga:</b>
                      <br />
                      <p>
                        1 {item.strIngredient1}-{item.strMeasure1};
                      </p>
                      <p>
                        2 {item.strIngredient2}-{item.strMeasure2};
                      </p>
                      <p>
                        3 {item.strIngredient3}-{item.strMeasure3};
                      </p>
                      <p>
                        4 {item.strIngredient4}-{item.strMeasure4};
                      </p>
                      <p>
                        5 {item.strIngredient5}-{item.strMeasure5};
                      </p>
                      <p>
                        6 {item.strIngredient6}-{item.strMeasure6};
                      </p>
                    </p>
                  </div>
                </div>
                <br />
                <p>
                  <b>Tayyorlanish yo'riqnomasi:</b>
                  <br />
                  {item.strInstructions}
                </p>
                Youtube helper:
                <a href={`${item.strYoutube}`}>Mutaxasis yordami</a>
              </div>
            );
          })}
        </div>
      ) :<Loader/>}
    </>
  );
}

export default IdMeal;
