import React from "react";
import AboutCard from "src/components/AboutCard";
import styles from "src/styles/Grid.module.css";
import aboutData from "src/data/about.json";
import styled from "styled-components";

const Title = styled.h1`
font-size: 2.5rem;
font-weight: 400;
color: hsl(233, 26%, 24%);
`
const SubTitle = styled.p`
font-weight: 300;
line-height: 1.5;
color: hsl(233, 8%, 62%);
`
export default function Career() {
  const card = aboutData.map((item) => {
    return (
      <AboutCard
        key={item.id}
        title={item.title}
        text={item.text}
        image={item.image}
      />
    );
  });
  return (
    <div className={styles.wrapper} id='career'>
      <Title>What I know so far?</Title>
      <SubTitle>
        We leverage Open Banking to turn your bank account into your financial
        hub. <br></br> Control your finances like never before.
      </SubTitle>

      <div>
        <div className={styles.grid}>{card}</div>
      </div>
    </div>
  );
}
