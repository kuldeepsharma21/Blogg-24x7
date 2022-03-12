import axios from "axios";
import React, { useEffect, useState } from "react";

import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import {
  MDBCol,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

function Blogs() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    getDetails();
    deleteDetails();
  }, []);

  const getDetails = async () => {
    const response = await axios.get("http://127.0.0.1:8000/blogs/");
    setDetails(response.data);
  };

  const deleteDetails = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/blogs/${id}/`);
    toast.error("Blog Deleted");
    getDetails();
  };

  return (
    <div className="showapp ">
      <div className="details-card-info ">
        {details.map((details) => (
          <MDBCol size="4">
            <MDBCard className="h-100 mt-2 " style={{ maxWidth: "22rem" }}>
              <MDBCardImage
                src={details.image}
                alt={details.title}
                position="top"
                style={{ maxWidth: "100%", height: "180px" }}
              />

              <MDBCardBody>
                <MDBCardTitle>{details.title}</MDBCardTitle>
                <MDBCardText className="text-center">
                  <h3 className="desc ">{details.description}</h3>
                  <Link to={`/blog/${details.id}`}>Read More</Link>
                </MDBCardText>
                <Badge>{details.category}</Badge>
                <br />
                <br />
                <br />
                <span>
                  <MDBBtn
                    className="mt-1"
                    tag="a"
                    color="none"
                    onClick={() => deleteDetails(details.id)}
                  >
                    <MDBIcon
                      fas
                      icon="trash"
                      style={{ color: "#dd4b39" }}
                      size="lg"
                    />
                  </MDBBtn>
                  <Link to={`/UpdateBlogs/${details.id}`}>
                    <MDBIcon
                      fas
                      icon="edit"
                      style={{ color: "#55acee", marginLeft: "10px" }}
                      size="lg"
                    />
                  </Link>
                </span>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </div>
    </div>
  );
}
export default Blogs;
