import Container from "./style";
import Link from "next/link";
import Card from "../card";

const SectionFour = () => {
  return (
    <Container>
      <div className="section-wrapper">
        <div className="section-title-box">
          <h2 className="main-titles">Информативно и достоверно</h2>
          <p className="main-texts section-four-text">
            Полноценная информация о медучреждениях и о врачах
          </p>
        </div>
        <div className="section-box">
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
            background="#E6E6EC"
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
            background="#F2F2F7"
          />
          <Card
            horizontal
            // vertical
            // reverse
            button={{
              text: "Доступно",
              onClick: () => console.log("SEE MORE"),
            }}
            title="Все медучреждения с рейтингом обслуживания"
            color="white"
            image={"/mobile-img.png"}
            background="#000"
          />
        </div>
        {/* <Card vertical /> */}
      </div>
    </Container>
  );
};
export default SectionFour;
