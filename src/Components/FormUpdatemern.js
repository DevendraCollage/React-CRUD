import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const FormUpdatemern = () => {
  const params = useParams();
  const [fitnessChallenges, setFitnessChallenges] = useState([]);
  const navigate = useNavigate();

  const apiURL = `http://localhost:3001/gym/${params.id}`;

  useEffect(() => {
    fetch(apiURL)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setFitnessChallenges(res);
      });
  }, [apiURL, params.id]);

  //TODO: Function to Update the value of the current fitness challenge in the array with new values from form inputs
  const handleEdit = (e) => {
    e.preventDefault();
    fetch(apiURL, {
      method: "PATCH",
      body: JSON.stringify({
        ChallengeName: fitnessChallenges.ChallengeName,
        StartDate: fitnessChallenges.StartDate,
        EndDate: fitnessChallenges.EndDate,
        Progress: fitnessChallenges.Progress,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        navigate("/apimern");
      } else {
        alert("Failed to update the fitness challenge");
      }
    });
  };

  //TODO: Logic to insert a new fitness challenge into the Backend
  const handleInsert = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/gym`, {
      method: "POST",
      body: JSON.stringify({
        ChallengeID: fitnessChallenges.ChallengeID,
        ChallengeName: fitnessChallenges.ChallengeName,
        StartDate: fitnessChallenges.StartDate,
        EndDate: fitnessChallenges.EndDate,
        Progress: fitnessChallenges.Progress,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        navigate("/apimern");
      } else {
        alert("Failed to insert the fitness challenge");
      }
    });
  };

  return (
    <div className="container">
      <h2 className="mt-3 mb-4">
        {params.id
          ? "Update Form For Fitness Challenges"
          : "Insert Form For Fitness Challenges"}
      </h2>
      <form>
        {!params.id ? (
          <>
            <div className="mb-2">
              <label className="form-label">Challenge ID</label>
              <input
                type="text"
                className="form-control"
                value={fitnessChallenges.ChallengeID}
                onChange={(e) =>
                  setFitnessChallenges({
                    ...fitnessChallenges,
                    ChallengeID: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Challenge Name</label>
              <input
                type="text"
                className="form-control"
                value={fitnessChallenges.ChallengeName}
                onChange={(e) =>
                  setFitnessChallenges({
                    ...fitnessChallenges,
                    ChallengeName: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Start Date</label>
              <input
                type="text"
                className="form-control"
                value={fitnessChallenges.StartDate}
                onChange={(e) =>
                  setFitnessChallenges({
                    ...fitnessChallenges,
                    StartDate: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-2">
              <label className="form-label">End Date</label>
              <input
                type="text"
                className="form-control"
                value={fitnessChallenges.EndDate}
                onChange={(e) =>
                  setFitnessChallenges({
                    ...fitnessChallenges,
                    EndDate: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Progress</label>
              <input
                type="text"
                className="form-control"
                value={fitnessChallenges.Progress}
                onChange={(e) =>
                  setFitnessChallenges({
                    ...fitnessChallenges,
                    Progress: e.target.value,
                  })
                }
              />
            </div>
          </>
        ) : (
          <>
            <div className="mb-2">
              <label className="form-label">Challenge Name</label>
              <input
                type="text"
                className="form-control"
                value={fitnessChallenges.ChallengeName}
                onChange={(e) =>
                  setFitnessChallenges({
                    ...fitnessChallenges,
                    ChallengeName: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Start Date</label>
              <input
                type="text"
                className="form-control"
                value={fitnessChallenges.StartDate}
                onChange={(e) =>
                  setFitnessChallenges({
                    ...fitnessChallenges,
                    StartDate: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-2">
              <label className="form-label">End Date</label>
              <input
                type="text"
                className="form-control"
                value={fitnessChallenges.EndDate}
                onChange={(e) =>
                  setFitnessChallenges({
                    ...fitnessChallenges,
                    EndDate: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Progress</label>
              <input
                type="text"
                className="form-control"
                value={fitnessChallenges.Progress}
                onChange={(e) =>
                  setFitnessChallenges({
                    ...fitnessChallenges,
                    Progress: e.target.value,
                  })
                }
              />
            </div>
          </>
        )}{" "}
        <button
          type="submit"
          className="btn btn-primary"
          onClick={params.id ? handleEdit : handleInsert}
        >
          {params.id ? "Edit" : "Insert"}
        </button>
      </form>
    </div>
  );
};

export default FormUpdatemern;
