import React, { useState, useEffect } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import axios from "axios";

const LatestBlogs = () => {
  const [details, setDetails] = useState([]);
  const [latestBlog, setLatestBlog] = useState([]);

  useEffect(() => {
    getDetails();
    fetchLatestBlog();
  }, []);

  const getDetails = async () => {
    const response = await axios.get("http://127.0.0.1:8000/blogs/");
    setDetails(response.data);
  };

  const fetchLatestBlog = async () => {
    const totalBlog = await axios.get("http://127.0.0.1:8000/blogs/");
    const start = totalBlog.data.length - 4;
    const end = totalBlog.data.length;
    const response = await axios.get(
      `http://127.0.0.1:8000/blogs?_start=${start}&_end=${end}`
    );
    setLatestBlog(response.data);
  };

  return (
    <div className="last">
      {details.slice(0).map((latestBlog) => (
        <Link to={`/blog/${latestBlog.id}`}>
          <MDBCard
            style={{ maxWidth: "300px", height: "80px" }}
            className="mt-2"
          >
            <MDBRow className="g-0">
              <MDBCol md="3">
                <MDBCardImage
                  src={latestBlog.image}
                  alt={latestBlog.title}
                  fluid
                  className="rounded-circle"
                  style={{ height: "80px" }}
                />
              </MDBCol>
              <MDBCol md="9">
                <MDBCardBody>
                  <p className="text-start latest-title">{latestBlog.title}</p>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </Link>
      ))}
    </div>
  );
};

export default LatestBlogs;
