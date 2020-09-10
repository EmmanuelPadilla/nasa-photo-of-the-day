import React from "react";
import styled, { keyframes } from "styled-components";

const StyledTitle = styled.div`
  color: ${(pr) => pr.theme.mainText};
`;

const Title = (data) => {
  console.log(data, "this is title");
  return (
    <StyledTitle className="Meat">
      <h2>{data.title}</h2>
    </StyledTitle>
  );
};

export default Title;
