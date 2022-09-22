import styled from "styled-components";

const Container = styled.section`
  padding: 128px 0;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.724213) 38.21%,
    #ffffff 100%
  );

  .under-hero-title-box {
    max-width: 647px;
  }

  .under-hero-title-mark {
    color: rgba(60, 60, 67, 0.6);
  }

  .under-hero-info {
    color: rgba(60, 60, 67, 0.6);
  }

  .download-box {
    display: flex;
    align-items: center;
    margin-top: 64px;
  }

  .google-play-img {
    margin-left: 24px;
  }

  .under-hero-info {
    margin: 16px 0 0 0;
  }
`;
export default Container;
