import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Instagram, Facebook, Whatsapp } from "react-bootstrap-icons";

export default function Footer() {
  return (
    <div className="sticky">
      <Navbar style={{ justifyContent: "center" }}>
        <Nav className="ml-auto">
          <Nav.Link href="#home">
            <Instagram />
          </Nav.Link>
          <Nav.Link href="#home">
            <Facebook />
          </Nav.Link>
          <Nav.Link href="/">
            <Whatsapp />
          </Nav.Link>
        </Nav>
      </Navbar>
      <p>© 2023 by Avner Levy.</p>
    </div>
  );
}
