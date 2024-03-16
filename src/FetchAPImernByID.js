import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FetchAPIByID = () => {
  const [fitnessChallenges, setFitnessChallenges] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const apiURL = `http://localhost:3001/gym/${params.id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiURL);
        if (!response.ok) {
          throw new Error("Failed to fetch challenge");
        }
        const data = await response.json();
        setFitnessChallenges(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [apiURL, params.id]);

  //? This function is to delete the data of the current id value value
  const handleDeleteFaculty = (index) => {
    fetch(apiURL, { method: "DELETE" }).then((res) => {
      if (res.ok) {
        navigate("/apimern");
      }
    });
  };

  return (
    <>
      {/* This is my form for update the value of the fitness challenges */}
      <div class="card col-3 p-0 m-2 d-flex flex-grow-1">
        <div className="card-body">
          <h5 className="card-text ">
            Challenge ID - {fitnessChallenges.ChallengeID}
          </h5>
          <h5 className="card-text">
            Challenge Name - {fitnessChallenges.ChallengeName}
          </h5>
          <h5 className="card-text">
            StartDate - {fitnessChallenges.StartDate}
          </h5>
          <h5 className="card-text">EndDate - {fitnessChallenges.EndDate}</h5>
          <h5 className="card-text">
            Progress - {fitnessChallenges.Progress}%
          </h5>
          <span>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleDeleteFaculty}
            >
              Delete
            </button>
          </span>
          <span>
            <button
              type="button"
              className="ms-2 btn btn-primary"
              onClick={() => {
                navigate(`/AddFit/${fitnessChallenges.ChallengeID}`);
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

//? This is my another logic
// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// const FetchAPIByID = () => {
//   const [fitnessChallenge, setFitnessChallenge] = useState(null);
//   // const { ChallengeID } = useParams();
//   const params = useParams();
//   const navigate = useNavigate();
//   const apiURL = "http://localhost:3001/challenges";

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`${apiURL}/${params.ChallengeID}`);
//         if (!response.ok) {
//           throw new Error(`Failed to fetch challenge: ${response.statusText}`);
//         }
//         const data = await response.json();
//         setFitnessChallenge(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, [apiURL, params.ChallengeID]);

//   if (!fitnessChallenge) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="card col-3 p-0 m-2 d-flex flex-grow-1">
//       <div className="card-body">
//         <h5 className="card-title">
//           Challenge ID - {fitnessChallenge.ChallengeID}
//         </h5>
//         <h5 className="card-text">
//           Challenge Name - {fitnessChallenge.ChallengeName}
//         </h5>
//         <h5 className="card-text">StartDate - {fitnessChallenge.StartDate}</h5>
//         <h5 className="card-text">EndDate - {fitnessChallenge.EndDate}</h5>
//         <h5 className="card-text">Progress - {fitnessChallenge.Progress}%</h5>
//         <span>
//           <button type="button" className="btn btn-danger">
//             Delete
//           </button>
//         </span>
//         <span>
//           <button type="button" className="ms-2 btn btn-primary">
//             Edit
//           </button>
//         </span>
//       </div>
//     </div>
//   );
// };

// export default FetchAPIByID;
