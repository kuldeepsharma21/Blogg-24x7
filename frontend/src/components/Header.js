import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
} from "mdb-react-ui-kit";

const Header = () => {
    const[show, setShow]=useState(false)
  return (
    <div>
      <MDBNavbar expand="lg" light style={{ backgroundColor: "#541b1b" }}>
        <MDBContainer fluid>
          
          <MDBNavbarToggler
            type="button"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{color:'#fff'}}
            onClick={() => setShow(!show)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse show={show} navbar>
            <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
              <MDBNavbarItem className="">
                <MDBNavbarLink aria-current="page" href="/" style={{color:'#fff'}}>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/addBlog" style={{color:'#fff'}}>Add Blog</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/about" style={{color:'#fff'}}>About Me</MDBNavbarLink>
              </MDBNavbarItem>
              
            </MDBNavbarNav>
          </MDBCollapse>
          <MDBNavbarBrand href="#" style={{marginRight:"47%",color:'#fff',size:"2.25rem"}}>Blog 24x7</MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
};

export default Header;
