import React from "react";
import styled from "styled-components";
import styles from "src/styles/Grid.module.css";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;

/* .image-wrapper{
  border-radius: 5%;
  width: 300px;
  height: 350px;
    
} */
  .my-img {
    width: 250px;
    height: 300px;
    margin: 0em 2em 0em
  /* overflow:hidden; */

    
  }
  
  p {
      font-size: 1.2rem;
    /* max-width: 80%; */
    line-height: 1.7;
    padding-bottom: 1em;
  }
  .brag-box {
  display: flex;
  }
  .inner-box{
    display: flex;
  }
  .icon {
  margin: 2px 15px;
  }
  // .icon:first-of-type{
  //   margin:2px 0px;
  // }
  .icon:last-of-type{
    //margin:2px 0px;
  }
  @media (max-width: 63em) {

    flex-direction: column;
    .brag-box{
 
  justify-content:center;
  align-items: center;
}
  }
  @media (max-width: 53em) {
    text-align:center;
    justify-content:center;
.brag-box{
  flex-direction: column;
  justify-content:center;
  align-items: center;
}
.inner-box{
  margin: 10px 0px;

}
@media (max-width: 27em) {
    text-align:center;}

  }
`;
function About() {
  return (
    <div className={styles.container} id="about">
      <Wrapper>
       <div className="image-wrapper">
          <img className="my-img" src="/images/my-picture.jpg" alt="My-image" />
       </div>

        <div className="text-wrapper">
          <p className="paragraph">
            My full name is Rustamjon Kodirkhonov. I am 23 years old frontend developer
            based in Seoul, South Korea. I like building fully responsive
            websites and web apps (also on the way to get able create
            cross-platform mobile applications). My core competency completes
            end-to-end development and maintenance of small and large scale
            software development. I perefer to have some sleep and read some blogs related to programming in my spare time.
          </p>
          
          <div className="brag-box">
            <div className="inner-box">
            <img className="icon" src="/images/html.png" alt="html-icon" />
            <img className="icon" src="/images/css.png" alt="css-icon" />
            <img className="icon" src="/images/git.png" alt="git-icon" />
            <img className="icon" src="/images/node.png" alt="node-icon" />
            <img className="icon" src="/images/react.png" alt="react-icon" />
            </div>
            <div className="inner-box">
            <img
              className="icon"
              src="/images/typescript.png"
              alt="typeScript-icon"
            />
            <img className="icon" src="/images/js.png" alt="Js-icon" />
            <img className="icon" src="/images/sass.png" alt="sass-icon" />
            <img className="icon" src="/images/github.png" alt="github-icon" />
            <img className="icon" src="/images/nothing.png" alt="no-icon" />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default About;
