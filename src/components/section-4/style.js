import styled from "styled-components";

const Container = styled.section`
  padding: 128px 0;
  background-color: #fff;

  .section-title-box {
    max-width: 691px;
    margin-bottom: 64px;

    .section-four-text {
      margin-top: 32px;
      color: rgba(60, 60, 67, 0.6);
    }
  }

  .section-box {
    display: grid;
    gap: 32px;
    grid-template-rows: 502px 661px;
    grid-template-columns: 0.58fr 0.42fr;
    width: 100%;
    height: auto;
  }
  
  .universal-card:nth-child(3) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;
export default Container;
