import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FetchAPImern = () => {
  const [fitnessChallenges, setFitnessChallenges] = useState([]);
  const apiURL = "http://localhost:3001/gym";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiURL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setFitnessChallenges(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const formattedChallenges = fitnessChallenges.map((challenge, index) => (
    <div key={index} className="card col-3 p-0 m-2 d-flex flex-grow-1">
      <div className="card-body">
        <h5 className="card-title">Challenge ID - {challenge.ChallengeID}</h5>
        <h5 className="card-text">
          Challenge Name - {challenge.ChallengeName}
        </h5>
        <h5 className="card-text">StartDate - {challenge.StartDate}</h5>
        <h5 className="card-text">EndDate - {challenge.EndDate}</h5>
        <h5 className="card-text">Progress - {challenge.Progress}%</h5>
        <Link
          className="btn btn-primary"
          to={`/challenges/${challenge.ChallengeID}`}
        >
          More
        </Link>
      </div>
    </div>

    //? This is my another logic to defined get the data
    // <div key={index}>
    //   {/* Render your challenge data here */}
    //   <p>{challenge.ChallengeName}</p>
    //   <p>{challenge.description}</p>
    //   {/* Example: Render a link to view challenge details */}
    //   <Link to={`/challenges/${challenge.id}`}>View Details</Link>
    // </div>
  ));

  return (
    <div className="container">
      <div className="row">{formattedChallenges}</div>
    </div>
  );
};

export default FetchAPImern;
