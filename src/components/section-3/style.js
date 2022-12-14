import styled, { css } from "styled-components";

const Container = styled.section`
  padding: 128px 0;

  .section-title-box {
    max-width: 691px;
    margin-bottom: 64px;

    .section-three-text {
      margin-top: 32px;
      color: rgba(60, 60, 67, 0.6);
    }
  }

  .section-box {
    display: grid;
    gap: 32px;
    grid-template-rows: repeat(3, 480px);
    grid-template-columns: 0.58fr 0.42fr;
    width: 100%;
    height: auto;
  }
  .universal-card:nth-child(1),
  .universal-card:nth-child(4) {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  .universal-card:nth-child(4) {
    grid-template-columns: 0.57fr 0.43fr;
  }

  ${(props) =>
    props.clinic &&
    css`
      .universal-card:nth-child(1) {
        grid-template-columns: 0.4fr 06fr;

        .image-cont {
          margin-top: -48px;
          width: calc(100% + 48px);
          height: calc(100% + 48px);
        }
      }
      .universal-card:nth-child(2) {
        .image-cont {
          margin-left: -48px;
          width: calc(100% + 96px);
          height: calc(100% + 48px);
        }
      }
    `}
`;
export default Container;
