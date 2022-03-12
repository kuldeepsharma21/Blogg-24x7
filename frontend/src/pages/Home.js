import { MDBRow, MDBCol, MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import Blogs from "../components/Blogs";
import Search from "../components/Search";
import LatestBlogs from "../components/LatestBlogs";

const Home = () => {
  return (
    <div>
      <Search />
      <MDBRow>
        <MDBCol size="9">
          <MDBContainer>
            <MDBRow>
              <Blogs />
            </MDBRow>
          </MDBContainer>
        </MDBCol>
        <MDBCol size="3">
          <h4 className="text-start">Latest Blog</h4>
          <LatestBlogs />
        </MDBCol>
      </MDBRow>

      <div className="mt-3"></div>
    </div>
  );
};

export default Home;
