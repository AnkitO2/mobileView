import React, { useState } from "react";
import "./App.css";
import { Search, Navigation, MapPin, Briefcase } from "feather-icons-react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Spinner,

  Card,
  
} from "reactstrap";
import { Home } from "feather-icons-react/build/IconComponents";

function App(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <>
      <div className="main-div shadow-sm p-3 mb-5 bg-body ">
        <div>
          <Navbar color="faded" light>
            <NavbarToggler onClick={toggleNavbar} className="me-2" />
            <Collapse isOpen={!collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="http://ec2-3-109-13-68.ap-south-1.compute.amazonaws.com/icons/reactfeather">
                    Sociome
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/AnkitO2/Amazon-Clone/commit/025b8dd2521b3d3f8cee58d1a523f7b61ceee5fa">
                    GitHub
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
            <Spinner>Loading...</Spinner>
          </Navbar>
        </div>
        <h4 className="mt-3">User Interface</h4>
        <h5> PSD Mockup</h5>
        <div
          className="d-flex p-1 border rounded-pill align-item-center overflow-hidden"
          style={{ background: "#e7e2f8" }}
        >
          <input
            type="text"
            placeholder="Search Destinations"
            className="w-100  border-0"
            style={{ background: "#e7e2f8" }}
            color="#988fbc"
          />
          <span className="">
            <Search />
          </span>
        </div>
        <div className="d-flex  justify-content-center justify-content-between  w-100 mt-4">
          <div className="d-flex justify-content-center align-items-center flex-column ">
            <span style={{ background: "#e7e2f8" }} className="p-2 rounded-2">
              <Navigation color="#988fbc" />
            </span>

            <p>Flights</p>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column ">
            <span style={{ background: "#5826ef" }} className="p-2 rounded-2">
              <MapPin color="#988fbc" />
            </span>

            <p>Places</p>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column ">
            <span style={{ background: "#e7e2f8" }} className=" p-2 rounded-2">
              <Briefcase color="#988fbc" />
            </span>

            <p>Packages</p>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column ">
            <span style={{ background: "#e7e2f8" }} className="p-2 rounded-2">
              <Home color="#988fbc" />
            </span>

            <p>Housing</p>
          </div>
        </div>
        <div className="Card-Div">
          <Card>
            <img
              alt="Sample"
              src="https://picsum.photos/300/200"
              className="Card-Img rounded-1"
            />
             <span>Positano,Italy</span>
            <img
              alt="Sample"
              src="https://picsum.photos/300/200"
              className="Card-Img rounded-1"
            />
            <span>Positano,Italy</span>
            <img
              alt="Sample"
              src="https://picsum.photos/300/200"
              className="Card-Img rounded-1"
            />
            <span>Positano,Italy</span>
            <img
              alt="Sample"
              src="https://picsum.photos/300/200"
              className="Card-Img rounded-1"
            />
            <span>Positano,Italy</span>
            <img
              alt="Sample"
              src="https://picsum.photos/300/200"
              className="Card-Img rounded-1"
            />
            <span>Positano,Italy</span>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
