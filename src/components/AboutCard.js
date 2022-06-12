import React from "react";
import styled from "styled-components";
const Container = styled.div`

h1{
    font-size: 1.5rem;
    margin: 1em 0em;
    font-weight: 400;
    color: hsl(233, 26%, 24%);
}
p{
    color:  hsl(233, 8%, 62%);
    font-weight: 300;
    line-height: 1.5;
}
`
export default function Careers({ title, text, image }) {
  return (
    < Container id="career">
      <img src={image} alt="img" />
      <h1>{title}</h1>
      <p>{text}</p>
    </ Container>
  );
}
