import Container from "./style";
import Link from "next/link";
import AppStore from "../../resources/app-store";
import GooglePlay from "../../resources/google-play";

const UnderHero = ({ title, subtitle }) => {
  return (
    <Container>
      <div className="section-wrapper">
        <div className="under-hero-part">
          <div className="under-hero-title-box">
            <h2 className="under-hero-title main-titles">
              {title}
              <span className="under-hero-title-mark">{subtitle}</span>
            </h2>
          </div>
          <div className="download-box">
            <Link href="/test">
              <a className="under-hero-img app-store-img">
                <AppStore />
              </a>
            </Link>
            <Link href="/test">
              <a className="under-hero-img google-play-img">
                <GooglePlay />
              </a>
            </Link>
          </div>
          <p className="main-texts  under-hero-info">
            Доступно для iPhone и Android + Умные часы
          </p>
        </div>
      </div>
    </Container>
  );
};

export default UnderHero;
