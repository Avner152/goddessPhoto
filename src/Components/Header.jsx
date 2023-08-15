import { Container, Nav, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "row-reverse",
        width: "100%",
        backgroundColor: "#ffffff44",
        maxHeight: "15vh",
      }}
      data-bs-theme="light"
    >
      <Container>
        <Navbar.Brand href="#home">ראשי</Navbar.Brand>
        <Nav className="ml-auto row-reverse">
          <Navbar.Brand href="#home"> ראשי</Navbar.Brand>
          <Nav.Link href="#home">קצת עליי</Nav.Link>
          <Nav.Link href="/">גלריה</Nav.Link>
          <Nav.Link href="/">המלצות</Nav.Link>
          <Nav.Link href="/">מבצעים</Nav.Link>
          <Nav.Link href="/">צרו קשר</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
