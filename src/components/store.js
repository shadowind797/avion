import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Header from "./header";
import Footer from "./footer";

class Store extends React.Component {
  render() {
    return (
      <div id="store">
        <Header />
        <main>
          <div id="storeTitle">
            <h1>Our products</h1>
          </div>
          <div id="storeHead">
            <a>Filters</a>
            <div id="nav">
              <Navbar expand="lg">
                <Container fluid>
                  <Navbar.Collapse id="navbar-light-example">
                    <Nav>
                      <p>Sorting by:</p>
                      <NavDropdown
                        id="nav-dropdown-dark-example"
                        title=""
                        menuVariant="light"
                      >
                        <NavDropdown.Item href="#action/3.1">
                          Action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          Something
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                          Separated link
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Store;
