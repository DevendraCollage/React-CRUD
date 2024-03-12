import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const FetchAPI = () => {
  const [faculties, setFaculties] = useState([]);
  const apiURL = "https://65e3074788c4088649f53321.mockapi.io/Faculty";

  useEffect(() => {
    fetch(apiURL)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // console.log("API Response Received!");
        setFaculties(res);
      });
  }, []);

  let formattedFaculties = faculties.map((fac) => {
    return (
      <>
        <div
          key={faculties.id}
          className="card col-3 p-0 m-2 d-flex flex-grow-1"
        >
          <img
            src={fac.FacultyImage}
            className="card-img-top"
            alt={fac.FacultyImage}
          />
          <div className="card-body">
            <h5 className="card-title">{fac.FacultyName}</h5>
            <p className="card-text">{fac.FacultyAbout}</p>
            <Link to={"/api/" + fac.id} className="btn btn-primary">
              More
            </Link>
          </div>
        </div>
      </>
    );
  });

  return (
    <div className="container">
      <div className="row">{formattedFaculties}</div>
    </div>
  );
};

export default FetchAPI;
