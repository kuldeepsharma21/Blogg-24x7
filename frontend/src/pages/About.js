import React from "react";

import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MDBContainer, MDBTypography } from "mdb-react-ui-kit";

const About = () => {
  //Delete Details

  const styleInfo = {
    display: "inline",
    marginLeft: "5px",
    float: "right",
    marginTop: "7px",
  };

  return (
    <MDBContainer style={{ border: "1px solid #d1ebe8" }}>
      <Link to={"/"}>
        <strong style={{ float: "left", color: "black" }} className="mt-3">
          Go Back
        </strong>
      </Link>
      <MDBTypography
        tag="h2"
        className="text-muted mt-2"
        style={{ display: "inline-block" }}
      >
        Kuldeep Sharma
      </MDBTypography>
      <img
        src="https://images.pexels.com/photos/2446534/pexels-photo-2446534.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        className="img-fluid rounded"
        alt=""
        style={{ width: "100%", maxHeight: "600px", display: "flex" }}
      />

      <div style={{ marginTop: "20px" }}>
        <div style={{ height: "43px", background: "#f6f6f6" }}>
          <Badge
            style={{ float: "right" }}
            styleInfo={styleInfo}
            className="badge"
          >
            {}
          </Badge>
        </div>
        <MDBTypography className="lead md-0 ">
          <p className="text">
            My self Kuldeep sharma. I am a beginner in this field. i have
            started working as a blogger from last 6 months.
          </p>
          <p className="text">
            For now i write blogs on topics like sports, travels, food, fitness,
            fashion and tech. I hope that in future i will covers more topics.
            it is a hobby of mine to find something new and share with other
            people i hope my blogs will help others in any way possibe.
          </p>
          <p className="text">
            My hobbies are watching movies, listening to music, playing cricket,
            reading interesting facts about anything and helping Needy person. I
            am a kind of a person who believes in honesty and punctuality. So
            that was about me. Thank you once again.
          </p>
        </MDBTypography>
      </div>

      {/* {relatedPost && relatedPost.length >0 &&(
      <h1>Related Post</h1>
      
    )} */}
    </MDBContainer>

    // <div className="show-detail">
    //     <h1 className="white">Details</h1>
    //     <div className="single-detail">
    //         <p>Title : {details.title}</p>
    //         <p>Description : {details.description}</p>
    //         <p>Category : {details.category}</p>

    //         <Link to={`/UpdateBlogs/${details.id}`} className="btn btn-primary m-2">Update</Link>
    //         <Link to="" className="btn btn-danger m-2" onClick={()=> deleteDetails(details.id)}>Delete</Link>

    //     </div>
    // </div>
  );
};

export default About;
