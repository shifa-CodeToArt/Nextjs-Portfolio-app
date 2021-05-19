import React from "react";
import { Container } from "reactstrap";
const BasePage = (props) => {
  const { className="", children } = props;
  return (
    <div>
      <Container className={`base-page ${className}`}>{children}</Container>
    </div>
  );
};

export default BasePage;
