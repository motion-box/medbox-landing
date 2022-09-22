import styled from "styled-components";

const Container = styled.section`
  padding: 58px 0 57px 0;
  background-image: url("/union-icon.svg");
  /* overflow-x: hidden; */

  .hero-part {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 813px;
    max-width: 1440px;
    margin: 0 auto;
  }

  .hero-img-box {
    position: relative;
    z-index: 10;
    width: 376px;
    height: 680px;
  }

  .hero-bubble {
    position: absolute;
    z-index: 6;
    /* transition: 1s all ease-out; */
  }

  .hero-bubble_1 {
    top: 189px;
    left: 180px;
    background: linear-gradient(180deg, #85d3ff 0%, #32a9eb 100%);
    box-shadow: 0px 30px 40px rgba(121, 190, 227, 0.4);
    border-radius: 50.5781px;
    transform: rotate(-16.97deg);
    transform-origin: 75% 25%;
  }

  .hero-bubble_2 {
    top: 239.86px;
    left: 320.49px;
    background: linear-gradient(180deg, #ff7474 0%, #e92e2e 100%);
    box-shadow: 0px 23.8178px 60px rgba(234, 49, 49, 0.4);
    border-radius: 71.4536px;
    transform: rotate(21.24deg);
    transform-origin: 75% 25%;
  }

  .hero-bubble_3 {
    top: 310.91px;
    right: 444px;
    z-index: 6;
    background: linear-gradient(180deg, #f7d354 0%, #dda209 100%);
    box-shadow: 0px 14.9884px 37.7577px rgba(248, 203, 47, 0.4);
    border-radius: 44.9653px;
    transform: rotate(-14.11deg);
    transform-origin: 75% 25%;
  }

  .hero-bubble_4 {
    top: 181.52px;
    right: 266.73px;
    z-index: 5;
    background: linear-gradient(180deg, #7785ff 0%, #2f43f8 100%);
    box-shadow: 0px 20.248px 51.007px rgba(47, 67, 248, 0.4);
    border-radius: 60.7439px;
    transform: rotate(15deg);
    transform-origin: 75% 25%;
  }

  .hero-bubble_5 {
    top: 351.92px;
    right: 200px;
    background: linear-gradient(180deg, #54fd83 0%, #27cc55 100%);
    box-shadow: 0px 11.7015px 29.4774px rgba(39, 204, 85, 0.4);
    border-radius: 35.1044px;
    transform: rotate(-15deg);
    transform-origin: 75% 25%;
  }
  .hero-bubble_6 {
    top: 351px;
    left: 106px;
    background: linear-gradient(180deg, #fd54ec 0%, #b527cc 100%);
    border-radius: 35.1044px;
    transform: rotate(-15deg);
    transform-origin: 75% 25%;
    box-shadow: 0px 11.7015px 29.4774px rgba(253, 84, 236, 0.4);
  }
`;

export default Container;
