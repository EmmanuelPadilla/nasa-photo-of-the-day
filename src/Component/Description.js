import React from "react";
import styled, { keyframes } from "styled-components";

const StyledDesc = styled.div`
  color: ${(pr) => pr.theme.mainText};
  display: flex;
  margin: 0 auto;
  width: 80%;
`;

const Description = (props) => {
  console.log("wth!!", props);
  return (
    <StyledDesc className="description">
      <p>{props.description}</p>
    </StyledDesc>
  );
};

export default Description;
