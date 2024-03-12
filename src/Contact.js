import React from "react";
import { useState } from "react";

const Forms = () => {
  const [data, setData] = useState("");
  const [faculty, setFaculty] = useState([]);
  const [editIndex, setEditIndex] = useState(-1); //? This state variable is use for change the state of the list item when updated the list items

  // FIXME: This is the update the state of the list item when click on the save button
  const handleUpdate = (e) => {
    //! This is new logic to update the state of the list item
    e.preventDefault();
    if (editIndex === -1) {
      setFaculty([...faculty, data]);
    } else {
      const updatedFaculties = [...faculty];
      updatedFaculties[editIndex] = data;
      setFaculty(updatedFaculties);
    }
    setData("");
  };

  // FIXME: This is the function to delete the list item when click on the delete button
  const handleDelete = (index) => {
    setFaculty(
      faculty.filter((_, i) => {
        return i !== index;
      })
    );
  };

  // FIXME: This is the function to edit the list of faculty
  const handleEdit = (editIndex) => {
    setData(faculty[editIndex]);
    setEditIndex(editIndex);
  };

  return (
    <div className="container align-items-center text-center ">
      {/* This is my old code */}
      {/* <h1>Contact Page</h1> */}

      {/* This is for crud to insert */}
      <form className="container d-flex justify-content-center">
        <table className="m-5">
          <tr>
            <td>Name</td>
            <td>:</td>
            <br />
            <td>
              <input
                type="text"
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
            </td>
            <td>
              <button
                className="btn btn-primary ms-2"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  setFaculty([...faculty, data]);
                  setData("");
                  setData(e.target.value);
                }}
              >
                Submit
              </button>
              <button
                className="btn btn-primary ms-2"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  //TODO: This is my old code for add data of the input filed
                  handleUpdate(e);

                  //! This code is not working
                  // handleUpdate([...faculty, data]);
                }}
              >
                Save
              </button>
            </td>
          </tr>
        </table>
      </form>
      <ul className="align-items-center">
        {faculty.map((item, index) => {
          return (
            <li
              key={index}
              className="m-3 d-flex justify-content-center align-items-center bg-body-tertiary"
            >
              {/* This is the current data of the list item when user click on the submit button */}
              {item}
              <span className="m-1">
                <button
                  className="btn btn-primary ms-2 m-2 p-2"
                  type="button"
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  Delete
                </button>
              </span>
              <span className="m-1">
                <button
                  className="btn btn-primary ms-2 m-2 p-2"
                  type="button"
                  onClick={() => {
                    // update the current data of the
                    handleEdit(index);
                  }}
                >
                  Edit
                </button>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Forms;
