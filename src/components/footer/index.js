import Container from "./style";
import Link from "next/link";
import AppStore from "../../resources/app-store";
import GooglePlay from "../../resources/google-play";

const Footer = ({ title, subtitle }) => {
  return (
    <Container>
      <div className="section-wrapper">
        <div className="footer-part">
          <div className="footer-title-box">
            <h2 className="footer-title main-titles">{title}</h2>
            <p className="footer-text main-texts">{subtitle}</p>
          </div>
          <div className="download-text-box">
            <div className="download-box">
              <Link href="/test">
                <a className="footer-img app-store-img">
                  <AppStore />
                </a>
              </Link>
              <Link href="/test">
                <a className="footer-img google-play-img">
                  <GooglePlay />
                </a>
              </Link>
            </div>
            <p className="main-texts  footer-info">
              Доступно для iPhone и Android + Умные часы
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
