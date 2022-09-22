import Container from "./style";
import Link from "next/link";
import Card from "../card";

const SectionThree = () => {
  return (
    <Container>
      <div className="section-wrapper">
        <div className="section-title-box">
          <h2 className="main-titles">Цифровая медицина.</h2>
          <p className="main-texts section-three-text">
            Доступно для iPhone и Android + Умные часы
          </p>
        </div>
        <div className="section-box">
          <Card
            horizontal
            // vertical
            // reverse
            button={{
              text: "Доступно",
              onClick: () => console.log("SEE MORE"),
            }}
            title="Цифровая медицина."
            image={"/mobile-img.png"}
          />
          <Card
            // horizontal
            vertical
            // reverse
            button={{
              text: "Доступно",
              onClick: () => console.log("SEE MORE"),
            }}
            title="Доступно для iPhone и Android + Умные часы"
            image={"/mobile-img.png"}
          />{" "}
          <Card
            // horizontal
            vertical
            reverse
            button={{
              text: "Доступно",
              onClick: () => console.log("SEE MORE"),
            }}
            title="Доступно для iPhone и Android + Умные часы"
            image={"/mobile-img.png"}
          />
          <Card
            horizontal
            // vertical
            // reverse
            button={{
              text: "Доступно",
              onClick: () => console.log("SEE MORE"),
            }}
            title="Цифровая медицина."
            image={"/mobile-img.png"}
          />
        </div>
        {/* <Card vertical /> */}
      </div>
    </Container>
  );
};
export default SectionThree;
