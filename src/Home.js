import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";

const Home = () => {
  // // ? Faculty Data Array
  // const facultyData = [
  //   {
  //     id: "1",
  //     FacultyName: "Dr. Gopi Sanghani",
  //     FacultyDesignation: "Dean - School of Computer Science",
  //     FacultyEducationQualification: "Ph.D. , M.E. (CE)",
  //     FacultyExperience: "22+ Years",
  //     FacultyWorkingSince: "Jul-2012",
  //     FacultyImage:
  //       "https://darshan.ac.in/U01/Faculty-Photo/5---29-04-2023-11-00-29.jpg",
  //   },
  //   {
  //     id: "2",
  //     FacultyName: "Dr. Nilesh Gambhava",
  //     FacultyDesignation: "Professor",
  //     FacultyEducationQualification: "Ph.D. , M.E. (CE)",
  //     FacultyExperience: "19+ Years",
  //     FacultyWorkingSince: "Jul-2009",
  //     FacultyImage:
  //       "https://darshan.ac.in/U01/Faculty-Photo/3---28-04-2023-02-02-42.jpg",
  //   },
  //   {
  //     id: "3",
  //     FacultyName: "Dr. Pradyumansinh Jadeja",
  //     FacultyDesignation: "Associate Professor",
  //     FacultyEducationQualification: "Ph.D. , M.E. (CE)",
  //     FacultyExperience: "17+ Years",
  //     FacultyWorkingSince: "Jul-2009",
  //     FacultyImage:
  //       "https://darshan.ac.in/U01/Faculty-Photo/6---28-04-2023-02-06-07.jpg",
  //   },
  //   {
  //     id: "4",
  //     FacultyName: "Prof. Maulik Trivedi",
  //     FacultyDesignation: "Assistant Professor",
  //     FacultyEducationQualification: "M.Tech. (CSE)",
  //     FacultyExperience: "14+ Years",
  //     FacultyWorkingSince: "Jun-2009",
  //     FacultyImage:
  //       "https://darshan.ac.in/U01/Faculty-Photo/8---28-04-2023-02-06-25.jpg",
  //   },
  //   {
  //     id: "5",
  //     FacultyName: "Prof. Dixita Kagathara",
  //     FacultyDesignation: "Assistant Professor",
  //     FacultyEducationQualification: "M.Tech. (Web Technology)",
  //     FacultyExperience: "13+ Years",
  //     FacultyWorkingSince: "Jul-2009",
  //     FacultyImage:
  //       "https://darshan.ac.in/U01/Faculty-Photo/9---28-04-2023-02-06-37.jpg",
  //   },
  //   {
  //     id: "6",
  //     FacultyName: "Prof. Rupesh Vaishnav",
  //     FacultyDesignation: "Assistant Professor",
  //     FacultyEducationQualification: "M.E. (CE)",
  //     FacultyExperience: "14+ Years",
  //     FacultyWorkingSince: "May-2013",
  //     FacultyImage:
  //       "https://darshan.ac.in/U01/Faculty-Photo/10---28-04-2023-02-07-03.jpg",
  //   },
  //   {
  //     id: "7",
  //     FacultyName: "Prof. Swati Sharma",
  //     FacultyDesignation: "Assistant Professor",
  //     FacultyEducationQualification: "M.Tech. (CSE)",
  //     FacultyExperience: "14+ Years",
  //     FacultyWorkingSince: "May-2013",
  //     FacultyImage:
  //       "https://darshan.ac.in/U01/Faculty-Photo/11---29-04-2023-01-44-21.jpg",
  //   },
  //   {
  //     id: "8",
  //     FacultyName: "Prof. Arjun Bala",
  //     FacultyDesignation: "Assistant Professor",
  //     FacultyEducationQualification: "M.Tech. (CSE)",
  //     FacultyExperience: "12+ Years",
  //     FacultyWorkingSince: "Jul-2013",
  //     FacultyImage:
  //       "https://darshan.ac.in/U01/Faculty-Photo/15---28-04-2023-02-07-35.jpg",
  //   },
  //   {
  //     id: "9",
  //     FacultyName: "Prof. Mayur Padia",
  //     FacultyDesignation: "Assistant Professor",
  //     FacultyEducationQualification: "M.E. (CE)",
  //     FacultyExperience: "13+ Years",
  //     FacultyWorkingSince: "Jul-2011",
  //     FacultyImage:
  //       "https://darshan.ac.in/U01/Faculty-Photo/13---28-04-2023-02-07-48.jpg",
  //   },
  //   {
  //     id: "10",
  //     FacultyName: "Prof. Vijay Shekhat",
  //     FacultyDesignation: "Assistant Professor",
  //     FacultyEducationQualification: "M.E. (CE)",
  //     FacultyExperience: "10+ Years",
  //     FacultyWorkingSince: "Jun-2012",
  //     FacultyImage:
  //       "https://darshan.ac.in/U01/Faculty-Photo/16---28-04-2023-02-08-00.jpg",
  //   },
  //   {
  //     id: "11",
  //     FacultyName: "Prof. Naimish Vadodariya",
  //     FacultyDesignation: "Assistant Professor",
  //     FacultyEducationQualification: "M.E. (CE)",
  //     FacultyExperience: "9+ Years",
  //     FacultyWorkingSince: "Jun-2015",
  //     FacultyImage:
  //       "https://darshan.ac.in/U01/Faculty-Photo/214---28-04-2023-02-08-35.jpg",
  //   },
  //   {
  //     id: "12",
  //     FacultyName: "Prof. UmeshKumar Thoriya",
  //     FacultyDesignation: "Assistant Professor",
  //     FacultyEducationQualification: "M.Tech. (CSE)",
  //     FacultyExperience: "9+ Years",
  //     FacultyWorkingSince: "Jul-2015",
  //     FacultyImage:
  //       "https://darshan.ac.in/U01/Faculty-Photo/221---28-04-2023-02-08-50.jpg",
  //   },
  //   {
  //     id: "13",
  //     FacultyName: "Prof. Jayesh Vagadiya",
  //     FacultyDesignation: "Assistant Professor",
  //     FacultyEducationQualification: "M.E (CE)",
  //     FacultyExperience: "7+ Years",
  //     FacultyWorkingSince: "Jul-2015",
  //     FacultyImage:
  //       "https://darshan.ac.in/U01/Faculty-Photo/219---28-04-2023-02-09-01.jpg",
  //   },
  //   {
  //     id: "14",
  //     FacultyName: "Prof. Krunal Vyas",
  //     FacultyDesignation: "Assistant Professor",
  //     FacultyEducationQualification: "M.Tech.(ICT), B.E. (EC)",
  //     FacultyExperience: "8+ Years",
  //     FacultyWorkingSince: "Jul-2018",
  //     FacultyImage:
  //       "https://darshan.ac.in/U01/Faculty-Photo/290---28-04-2023-02-09-16.jpg",
  //   },
  //   {
  //     id: "15",
  //     FacultyName: "Prof. Jay Dhamsaniya",
  //     FacultyDesignation: "Assistant Professor",
  //     FacultyEducationQualification: "M.E. (E.C.), B.Tech. (E.C.)",
  //     FacultyExperience: "10+ Years",
  //     FacultyWorkingSince: "Jul-2012",
  //     FacultyImage:
  //       "https://darshan.ac.in/U01/Faculty-Photo/46---28-04-2023-02-09-28.jpg",
  //   },
  //   {
  //     id: "16",
  //     FacultyName: "Prof. Mehul Bhundiya",
  //     FacultyDesignation: "Assistant Professor",
  //     FacultyEducationQualification: "BE (CE), ME (CE)",
  //     FacultyExperience: "8+ Years",
  //     FacultyWorkingSince: "Aug-2018",
  //     FacultyImage:
  //       "https://darshan.ac.in/U01/Faculty-Photo/294---28-04-2023-02-09-43.jpg",
  //   },
  // ];
  // // ? Use-State for update the state of the card
  // const [faculty, setFaculty] = useState(facultyData);
  // // ? Function to delete Faculty Data
  // function deleteFaculty(facultyname) {
  //   setFaculty(
  //     faculty.filter((e) => {
  //       return e.FacultyName !== facultyname;
  //     })
  //   );
  // }
  // // ? Card ui of the Faculty
  // var facultyFormated = faculty.map((fac) => {
  //   return (
  //     <div key={fac.id} className="card col-4 p-0 m-2 d-flex flex-grow-1">
  //       <img src={fac.FacultyImage} className="card-img-top" alt="" />
  //       <div className="card-body">
  //         <h5 className="card-title">{fac.FacultyName}</h5>
  //         <p className="card-text">{fac.FacultyDesignation}</p>
  //         {/* This is button to remove faculty */}
  //         <button
  //           className="btn btn btn-outline-secondary ms-1"
  //           onClick={() => {
  //             deleteFaculty(fac.FacultyName);
  //           }}
  //         >
  //           Delete
  //         </button>
  //         {/* This is button to add new faculty */}
  //         <button className="btn btn-outline-primary ms-1">Update</button>
  //       </div>
  //     </div>
  //   );
  // });
  // return (
  //   <div className="container">
  //     <div className="row">{facultyFormated}</div>
  //   </div>
  // );

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <h1 className="animated-name">Devendra Parmar</h1>
    </div>
  );
};

export default Home;
