import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { MDBIcon, MDBContainer, MDBTypography } from "mdb-react-ui-kit";
import { toast } from "react-toastify";

const Blog = () => {
  const [details, setDetails] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getSingleProduct();
    }
  }, [id]);

  const getSingleProduct = async () => {
    const { data } = await axios.get(`http://127.0.0.1:8000/blogs/${id}`);
    setDetails(data);

    console.log(data);
  };
  //Delete Details

  const deleteDetails = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/blogs/${id}/`);
    toast.error("Blog Deleted");
    navigate("/");
  };

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
        {details && details.title}
      </MDBTypography>
      <img
        src={details && details.image}
        className="img-fluid rounded"
        alt={details && details.title}
        style={{ width: "100%", maxHeight: "600px", display: "flex" }}
      />

      <div style={{ marginTop: "20px" }}>
        <div style={{ height: "43px", background: "#f6f6f6" }}>
          <MDBIcon
            style={{ float: "left" }}
            className="mt-3"
            far
            icon="calendar-alt"
            size="lg"
          />
          <strong
            style={{ float: "left", marginTop: "12px", marginLeft: "5px" }}
          >
            {details && details.date}
          </strong>
          <Badge
            style={{ float: "right", padding: "15px" }}
            styleInfo={styleInfo}
            className="badge"
          >
            {details && details.category}
          </Badge>
        </div>
        <MDBTypography className="lead md-0">
          <p className="text">{details && details.description}</p>
          
        </MDBTypography>
      </div>

      <Link to={`/UpdateBlogs/${details.id}`} className="btn btn-primary m-2">
        Update
      </Link>
      <Link
        to=""
        className="btn btn-danger m-2"
        onClick={() => deleteDetails(details.id)}
      >
        Delete
      </Link>
    </MDBContainer>
  );
};

export default Blog;
