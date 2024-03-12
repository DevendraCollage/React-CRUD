import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormUpdate from "./Components/FormUpdate";

const FetchAPIByID = () => {
  const [faculty, setFaculties] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  // const [editIndex, setEditIndex] = useState(-1); //? This state variable is use for change the state of the list item when updated the list items
  const apiURL = "https://65e3074788c4088649f53321.mockapi.io/Faculty";

  useEffect(() => {
    fetch(`${apiURL}/${params.id}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setFaculties(res);
      });
  }, [apiURL, params.id]);

  const handleDeleteFaculty = (index) => {
    fetch(`${apiURL}/${params.id}`, { method: "DELETE" }).then((res) => {
      if (res.ok) {
        navigate("/api");
      }
      //? this is another logic to update the current state of the list after deleting an item
      // setFaculties(
      //   faculty.filter((fac) => {
      //     return fac.id !== index;
      //   })
      // );
    });
  };

  return (
    <>
      {/* This is my form for update the value of the faculty */}
      <div class="card col-3 p-0 m-2 d-flex flex-grow-1">
        <img
          src={faculty.FacultyImage}
          className="card-img-top"
          alt={faculty.FacultyName}
        />
        <div className="card-body">
          <h5 className="card-title">{faculty.FacultyName}</h5>
          <p className="card-text">{faculty.FacultyAbout}</p>
          <span>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                handleDeleteFaculty();
              }}
            >
              Delete
            </button>
          </span>
          <span>
            <button
              type="button"
              className="ms-2 btn btn-primary"
              onClick={() => {
                navigate(`/edit/${faculty.id}`, FormUpdate);
              }}
            >
              Edit
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default FetchAPIByID;
