import React from "react";
import styled from "styled-components";
import Link from "next/link";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: hsl(0, 0%, 98%);
  width: 100%;
  @media (max-width: 53em) {
    flex-direction: column-reverse;
  }
`;
const InfoContainer = styled.div`
  padding: 0em 4em;

  width: 45%;
  main {
    /* width: 600px; */
    margin: 12em 0em 20em 0em;
  }
  @media (max-width: 65em) {
    padding: 0em 4em;

    main {
      margin: 4em 0em 20em 0em;
    }
  }
  h1 {
    color: hsl(233, 26%, 24%);
    font-size: 3rem;
    font-weight: 400;
  }
  p {
    font-weight: 300;
    line-height: 1.5;
    color: hsl(233, 8%, 62%);
    margin-bottom: 2em;
  }
  @media (max-width: 53em) {
    text-align: center;
    width: 100%;
    main {
      width: 100%;
      /* margin-top: -10em; */
      display:flex;
    justify-content:center;
flex-direction: column;
align-items:center;
    }
  }
`;
const ImgContainer = styled.div`
  /* background-image: url("/images/bg-intro-desktop.svg"); */
  /* background-position: top -260px left -0%; */
  /* background-size: 160%; */
  /* background-repeat: no-repeat; */
 
  width: 45%;

  img {
     /* width: 100%; */
    /* max-height: 100%; */ 
    object-fit: cover;
    object-position: 100%;
  }
  @media (max-width: 65em) {
    width: 100%;
    /* background-position: top -170px left -0%; */
    /* background-size: 150%; */
    
    img {
      /* object-position: 100px -100px; */
    }
  }
  @media (max-width: 53em) {
    /* background-image: url("/images/bg-intro-mobile.svg"); */
    /* background-position: top -260px left -0%; */
    /* background-size: 160%; */
    /* width: 100%; */
    display: flex;
    justify-content: center;
    margin-left: -50px;

    img {
      /* object-position: 0px -280px; */
    }
  }
  @media (max-width: 41em) {
    margin-left: -30px;

    img {
      /* object-position: 0px -140px; */
      width: 80%;
    }
  }
`;
const Button = styled.button`
          
     
           background-image: linear-gradient(to right, #314755 0%, #26a0da  51%, #314755  100%);
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            display: block; 
            border:none;
     

        &:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;}
   
`;

export default function Home() {
  return (
    <Container id="intro">
      <InfoContainer>
        <main>
          <h1>
            Hi there! <br></br>I am Rustamjon<br></br> A frontend developer
          </h1>
          <p>
            I am a self-taught frontend developer who loves problem-solving
            while drinking a cup of coffee.
          </p>
          <Link href="https://github.com/rkodirkhonov" target="blank">
        <Button>Resume</Button>
        </Link>
        </main>
      </InfoContainer>
      <ImgContainer>
        <img src="/images/image.png" alt="mockUps" />
      </ImgContainer>
    </Container>
  );
}
