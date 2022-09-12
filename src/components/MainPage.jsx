import React, { useContext } from "react";
import "../styles/style.css";
import {Link} from "react-router-dom"
import { ContextProvider } from "../reducer/context";
import { useEffect } from 'react';
import { getAllMeals} from './Function';

function MainPage(props) {
  const {setData} = useContext(ContextProvider)

  useEffect(()=>{
    getAllMeals()
    .then(data=>{
      setData(data.categories)  
    })
    // eslint-disable-next-line
  },[])
  const { posts } =useContext(ContextProvider);
  return (
    <>
    
      <div className="context"> 
        {posts.length
          ? posts.map((item, idx) => {
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
                <Link to={`/category/${item.strCategory}`} className="btn btn-primary">Watch more</Link>
                  </div>
                </div>
              );
            })
          : "Loading"}
      </div>
    </>
  );
}

export default MainPage;
