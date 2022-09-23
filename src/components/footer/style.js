import styled from "styled-components";

const Container = styled.footer`
  padding: 128px 0;
  background-color: #fff;

  .footer-title-box {
    max-width: 691px;
  }

  .footer-info,
  .footer-text {
    color: rgba(60, 60, 67, 0.6);
  }

  .footer-text {
    margin: 32px 0 0 0;
  }

  .download-box {
    display: flex;
    align-items: center;
    margin-top: 64px;
  }

  .google-play-img {
    margin-left: 24px;
  }

  .footer-info {
    margin: 16px 0 0 0;
  }

  .download-text-box {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;
export default Container;
