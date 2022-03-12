import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MDBCol,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBBtn,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { MDBInput } from "mdb-react-ui-kit";

export default function Posts() {
  const [APIData, setAPIData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/blogs/`).then((response) => {
      setAPIData(response.data);
    });
  }, []);

  const deleteDetails = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/blogs/${id}/`);
  };

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = APIData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };

  return (
    <>
      <div>
        <MDBInput
          label=""
          placeholder="Search Here..."
          type="text"
          id="formWhite"
          contrast
          className=""
          onChange={(e) => searchItems(e.target.value)}
          style={{marginTop:"10px",maxWidth:"90%",marginInline:"auto"}}
        />
        {/* <input
        type="text"
        className="form-control inp"
        placeholder="Search..."
        onChange={(e) => searchItems(e.target.value)} /> */}
      </div>
      <div className="sear" style={{ padding: 20 }}>
        {searchInput.length > 1
          ? filteredResults.map((item) => {
              return (
                <MDBCol size="4">
                  <MDBCard className="h-100 mt-2" style={{ maxWidth: "22rem" }}>
                    <MDBCardImage
                      src={item.image}
                      alt={item.title}
                      position="top"
                      style={{ maxWidth: "100%", height: "180px" }}
                    />

                    <MDBCardBody>
                      <MDBCardTitle>{item.title}</MDBCardTitle>
                      <MDBCardText className="text-center">
                        <h3 className="desc ">{item.description}</h3>
                        <Link to={`/blog/${item.id}`}>Read More</Link>
                      </MDBCardText>
                      <Badge>{item.category}</Badge>
                      <br />
                      <br />
                      <br />
                      <span>
                        <MDBBtn
                          className="mt-1"
                          tag="a"
                          color="none"
                          onClick={() => deleteDetails(item.id)}
                        >
                          <MDBIcon
                            fas
                            icon="trash"
                            style={{ color: "#dd4b39" }}
                            size="lg"
                          />
                        </MDBBtn>
                        <Link to={`/UpdateBlogs/${item.id}`}>
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
              );
            })
          : APIData.map((item) => {
              return <div></div>;
            })}
      </div>
    </>
  );
}
