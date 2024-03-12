import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FormUpdate = () => {
  const [faculty, setFaculties] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

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

  //TODO: Function to update the value of the current faculties
  const handleEdit = (e) => {
    e.preventDefault();
    fetch(`${apiURL}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify({
        FacultyName: faculty.FacultyName,
        FacultyAbout: faculty.FacultyAbout,
        FacultyImage: faculty.FacultyImage,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        navigate("/api");
      } else {
        alert("Failed to edit!");
      }
    });
  };

  //TODO: Logic to insert a new faculty into the API
  const onSubmit = (e) => {
    e.preventDefault();
    fetch(`${apiURL}`, {
      method: "POST",
      body: JSON.stringify(faculty),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        navigate("/api");
      })
      .catch((err) => console.log(err))
      .finally(() => {
        window.location.reload();
      });
  };

  return (
    <div className="container">
      <h2 className="mt-4 mb-4">
        {params.id ? "Update Form of Employee" : "Insert Form of Employee"}
      </h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={faculty.FacultyName}
            onChange={(e) =>
              setFaculties({ ...faculty, FacultyName: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            value={faculty.FacultyAbout}
            onChange={(e) => {
              setFaculties({ ...faculty, FacultyAbout: e.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="text"
            className="form-control"
            value={faculty.FacultyImage}
            onChange={(e) => {
              setFaculties({ ...faculty, FacultyImage: e.target.value });
            }}
          />
        </div>
        {!params.id && (
          <button type="submit" className="btn btn-primary" onClick={onSubmit}>
            Insert
          </button>
        )}
        <button className="btn btn-secondary ms-2" onClick={handleEdit}>
          Edit
        </button>
      </form>
    </div>
  );
};

export default FormUpdate;
