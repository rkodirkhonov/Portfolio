import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import Link from "next/link";

export default function MobileHeader({ mobileMenuOpen, setMobileMenuOpen, toggle }) {
  const overlayVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        duration: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        duration: 0.3,
      },
    },
  };
  return (
    <Container>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            className="modal-overlay"
          >
            <motion.div className="modal" transition={{ duration: 0.3 }}>
              <nav className="modal-content">
                <ul onClick={toggle}>
                  <li >
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
                    <Link href="#contact">
                      <a>Contact</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#blog">
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#about">
                      <a>Careers</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    ul {
      padding-left: 0;
      text-align: center;
    }
    nav > ul > li {
      list-style-type: none;
      margin: 1em;
      font-weight: 300;
      color: hsl(233, 8%, 62%);
    }
    nav > ul > li a {
      color: hsl(233, 8%, 62%);
      text-decoration: none;
      font-weight: 500;
    }
  }
  .modal {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    max-width: 500px;
    width: 80%;
    background-color: #fff;
    border-radius: 5px;
  }
  .modal-content {
    padding: 1rem;
  }
`;
