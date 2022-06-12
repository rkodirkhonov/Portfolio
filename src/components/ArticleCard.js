import React from "react";
import styled from "styled-components";

const Container = styled.div`
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
border-radius: 5px;
overflow: hidden;
margin-top: 1.5em;
background-color: hsl(0, 0%, 100%);
transition: .3s ease-in-out;
&:hover{
  box-shadow: none
}

@media (max-width: 50em) {
    max-height: 480px;


    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
}

.img-container{
    height: 50%;
}
img{
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: 0.3s ease;
}
img:hover{

      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    

}
`;
const TextContainer = styled.div`
padding: 1.3em;

small{
    color:hsl(233, 8%, 62%);
}

h3{
font-weight: 400;
color:hsl(233, 26%, 24%) ;

}
p{
    font-weight: 300;
    color: hsl(233, 8%, 62%);
line-height: 1.4;

}
`;
export default function ArticleCard({ title, text, image, author }) {
  return (
    <Container>
      <div className="img-container">

      <img src={image} alt="blog-img" />
      </div>

      <TextContainer>
        <small>{author}</small>
        <h3>{title}</h3>
        <p>{text}</p>
      </TextContainer>
    </Container>
  );
}
