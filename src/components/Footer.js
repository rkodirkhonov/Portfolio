import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: hsl(233, 26%, 24%);
  display: flex;
  padding: 2em 8em;
  .contact-request {
    margin-left: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: hsl(233, 8%, 62%);
    font-weight: 400;
  }
  .contact-request p {
    margin-top: 2em;
  }
  @media (max-width: 65em) {
    padding: 2em 4em;
  }
  @media (max-width: 50em) {
    flex-direction: column;
    align-items: center;
    .contact-request {
    margin-left: 0;}
  }
@media (max-width: 41em) {
    padding: 2em 2em;
}
`;
const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  h2{
    color: hsl(233, 8%, 92%);

  }
  .images {
    display: block;
    margin-top: 2.5em;
  }
  img {
    margin: 5px;
  }

  .contact-links {
    display: flex;
  }
  .margin {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
ul{

  padding: 0; 
  list-style: none; 
  display: table;
  text-align: center;

}
  ul li {
    
  position: relative; 
  padding: 10px 0;
  }
  ul li a {
    color: #fff;
  text-decoration: none;
 
 
  display: inline-block;
  padding: 5px ;
  position: relative;

    font-weight: 300;

    text-decoration: none;
  }
  a:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #fff;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
a:hover:after { 
  width: 100%; 
  left: 0; 
}
@media screen and (max-height: 300px) {
	ul {
		margin-top: 40px;
	}
}

  @media (max-width: 65em) {
    .images {
      margin-top: 2rem;
    }
  }
  @media (max-width: 50em) {
    flex-direction: column;
    align-items: center;
    ul{
        text-align: center;
        padding: 0px;
        margin: 0;
    }
    nav{
        margin: 1em 0em
    }
    .images {
      margin-top: 1rem;
      margin: 1em 0em 1em 0em;

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
  @media (max-width: 50em) {
      margin: 1em 0em 0em 0em;
  }
`;
export default function Contact() {
  return (
    
    <Wrapper id="contact">
      <DetailsContainer>
        <div className="margin">
          <Link href="/">
          <h2>Rustamjon</h2>
          </Link>
          <div className="images">
            <Link href="https://www.facebook.com/developer6229">
            <img src="/images/icon-facebook.svg" alt="facebook-icon" />
            </Link>
            <Link href="https://twitter.com/RKodirkhonov">
            <img src="/images/icon-twitter.svg" alt="twitter-icon" />
            </Link>
            <Link href="https://www.instagram.com/r.kodirkhonov/">
            <img src="/images/icon-instagram.svg" alt="instagram" /> 
            </Link>
          </div>
        </div>

        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="#projects">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="#career">
              <a>Careers</a>
            </Link>
          </li>
        </ul>
    
      </DetailsContainer>

      <div className="contact-request">
      <Link href="https://github.com/rkodirkhonov">
        <Button>Resume</Button>
        </Link>
  
      </div>
    </Wrapper>
  );
}
