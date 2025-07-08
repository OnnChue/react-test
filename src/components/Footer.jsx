import React from "react";
import Container from "./Container";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="mx-5 bg-stone-950 text-white text-center py-2 mt-auto">
      <Container>
        <p>&copy; {date} Online Shop. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
