import styled from "styled-components";

const Container = styled.section`
  padding: 128px 0;

  .section-title-box {
    max-width: 691px;
    margin-bottom: 64px;

    .section-five-text {
      margin-top: 32px;
      color: rgba(60, 60, 67, 0.6);
    }
  }

  .section-box {
    display: grid;
    gap: 32px;
    grid-template-rows: repeat(2, 480px);
    grid-template-columns: 0.58fr 0.42fr;
    width: 100%;
    height: auto;
  }
  .universal-card:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;
export default Container;
