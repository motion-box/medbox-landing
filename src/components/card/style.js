import styled, { css } from "styled-components";

const Container = styled.div`
  position: relative;
  display: grid;
  gap: 32px;
  width: 100%;
  height: 100%;
  padding: 48px;
  background-color: ${(props) => props.background || "#ffffff"};
  border-radius: 32px;

  button {
    grid-area: button;
    width: fit-content;
    padding: 0;
    font-weight: 400;
    font-size: 22px;
    line-height: 34px;
    letter-spacing: 0.35px;
    color: #007aff;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  h3 {
    grid-area: title;
    margin: 0;
    font-weight: 400;
    font-size: 34px;
    line-height: 41px;
    letter-spacing: 0.374px;
    color: ${(props) => props.color || "#000"};
  }

  .image-cont {
    position: relative;
    grid-area: image;
    width: 100%;
    height: calc(100% + 48px);
    align-self: flex-start;
  }

  .trashhold {
    grid-area: trashhold;
    height: 34px;
  }

  ${(props) =>
    props.horizontal &&
    css`
      align-items: center;
      grid-template-areas: ${(props) =>
        !props.reverse
          ? `
            "button image"
            "title image"
            "trashhold image"
            `
          : `
            "image button"
            "image title"
            "trashhold title"
            `};
      grid-template-columns: 0.67fr 0.33fr;
      grid-template-rows: auto 1fr;

      h3 {
        font-weight: 600;
        font-size: 64px;
        line-height: 70px;
      }
    `}

  ${(props) =>
    props.vertical &&
    css`
      grid-template-areas: ${(props) =>
        !props.reverse
          ? `
            "button"
            "title"
            "image"
            `
          : `
            "button"
            "image"
            "title"
            `};
      grid-template-rows: ${(props) =>
        !props.reverse ? "auto auto 1fr" : "auto 1fr auto"};

      h3 {
        font-size: 34px;
      }
      .image-cont {
        height: ${(props) => (!props.reverse ? "calc(100% + 48px)" : "100%")};
      }
    `}
`;

export default Container;
