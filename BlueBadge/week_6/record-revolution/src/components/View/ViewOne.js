import React from "react";
import styled from "styled-components";
import disc from "../../assets/disc.png";

//you have to creat variables then store the styling inside of that
//use backticks inside of components (like in the Resize)

const Resize = styled.img`
  width: 65vw;
  height: auto;
  display: block;
  margin: 0 auto;
`;

const ViewOne = () => {
  return (
    <div>
      <Resize src={disc} />
    </div>
  );
};

export default ViewOne;
