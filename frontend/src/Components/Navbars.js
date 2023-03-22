import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import doctorLogo from "../Images/MedXpertsLogo.png";
import Button from "react-bootstrap/Button";
import "../styles/componentStyles/navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/actions/UserAction";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { useNavigate } from "react-router-dom";

function Navbars() {
  const userInfo = useSelector((state) => state.userlogin.userInfo);
  const navigate = useNavigate();

  console.log("navvv", userInfo);
  console.log("222navvv", userInfo?.unseenNotifications?.length);

  const dispatch = useDispatch();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand  style={{marginRight:'100px'}}>
        <Link to='/' style={{ textDecoration: 'none' }}> <img src={doctorLogo} title="logo" className="logoImg" /></Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
           

            <NavDropdown title="Appointments" id="basic-nav-dropdown"  >
              <NavDropdown.Item>
                <Link to={"/view-appointments"} style={{ textDecoration: 'none' }}>view your appointments </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#home">Find Doctors</Nav.Link>

            <NavDropdown title="Health Blogs" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#home">FAQ</Nav.Link>

            <Nav.Link className="d-flex ">
              {" "}
              
               <div>
                <i className="ri-notification-line header-action-icon px-1"></i>{" "}
                </div>

                <div>
                <Badge
                  count={userInfo?.unseenNotifications?.length}
                  onClick={() => navigate("/your-notifications")}
                  className="bg-success"
                >
                  {userInfo?.unseenNotifications?.length}
                </Badge>
                </div>
             
            </Nav.Link>

            {userInfo ? (
              <NavDropdown title={userInfo.username} id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="/login"
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown title="Login" id="basic-nav-dropdown">
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="">Signup</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
