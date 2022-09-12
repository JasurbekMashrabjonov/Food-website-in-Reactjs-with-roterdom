import React, { useContext, useEffect } from "react";
import "../styles/style.css";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getCategory } from "./Function";
import { ContextProvider } from "../reducer/context";
import Loader from "./Loader";
function ListCategory(props) {
  const { category } = useParams();
  const navigate = useNavigate();

  const { categories, setCategory } = useContext(ContextProvider);

  useEffect(() => {
    getCategory(category).then((data) => {
      setCategory(data.meals);
    });
    // eslint-disable-next-line
  }, [category]);
  return (
    <>      
    {categories.length? (
      <>
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
      <div className="context">
        { categories.map((item, idx) => {
              return (
                <div className="card" key={idx}>
                  <img
                    src={item.strMealThumb}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.strMeal}</h5>

                    <Link to={`/id/${item.idMeal}`} className="btn btn-primary">
                      Details
                    </Link>
                  </div>
                </div>
              );
            })}
         
      </div>
      </>
    ):<Loader/>
    }
    </>
  );
}

export default ListCategory;
