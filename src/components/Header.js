import React, { useState, useRef } from "react";
import { useDimensions } from "src/hooks";
import { motion } from "framer-motion";
import styled from "styled-components";
import { MenuToggle } from "./MenuToggle";
import MobileHeader from "./MobileHeader";
import Link from "next/link";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  padding: 1em 0em;
  align-items: center;
  border-left: 0.1px solid hsl(220, 16%, 96%);
  border-right: 0.1px solid hsl(220, 16%, 96%);

  h2{
    color: hsl(233, 8%, 32%);
    cursor:pointer

  }
  nav > ul {
    padding: 0; 
  list-style: none; 
  display: flex;
  text-align: center;

  }
  nav > ul > li {
    position: relative; 
  padding: 10px 0;
    list-style-type: none;
    margin: 0em 1em;
    font-weight: 300;
    color: hsl(233, 8%, 62%);
  }
  nav > ul > li a {
    color: hsl(233, 8%, 62%);
    text-decoration: none;
    font-weight: 500;
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
  background: hsl(192, 70%, 51%);
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
nav > ul> li a:hover:after { 
  width: 100%; 
  left: 0; 
}
@media screen and (max-height: 300px) {
	ul {
		margin-top: 40px;
	}
}
  @media (max-width: 50em) {
    margin: 0em 1em;
    /* padding: 0.5em 0em; */
    justify-content: space-between;
    h2{
      margin-left: .5em;
    }
  }
`;

const Button = styled.button`
  background: linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%));
  padding: 0.8em 3em;
  font-size: 18px;
  border-radius: 25px;
  font-weight: 400;
  font-family: "Public Sans", sans-serif;
  border: 0;
  color: #fff;
  &:hover {
    cursor: pointer;
  }
`;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <HeaderContainer>
        <Link href="/">
          <div>
            <h2>Rustamjon</h2>
          </div>
        </Link>

        <div className="desktop-only">
          <nav>
            <ul>
              <li>
                <Link href="#intro">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="#about">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="#career">
                  <a>Career</a>
                </Link>
              </li>
              <li>
                <Link href="#projects">
                  <a>Projects</a>
                </Link>
              </li>
              <li>
                <Link href="#contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* <div className="desktop-only">
          <Button>Resume </Button>
        </div> */}
        <div className="mobile-only">
          <MenuToggle
            toggle={() => setMobileMenuOpen((b) => !b)}
            open={mobileMenuOpen}
          />
        </div>
      </HeaderContainer>
      <div className="mobile-only">
        <MobileHeader
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          toggle={() => setMobileMenuOpen((b) => !b)}
          open={mobileMenuOpen}
        />
      </div>
    </>
  );
}
