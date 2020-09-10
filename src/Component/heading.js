import React from "react";
import styled, { keyframes } from "styled-components";
const StyledHeading = styled.div`
  color: ${(pr) => pr.theme.mainText};
`;

const Heading = (data) => {
  return (
    <StyledHeading className="heading">
      <h1>Astronomy Picture for {data.date}</h1>
    </StyledHeading>
  );
};

export default Heading;
