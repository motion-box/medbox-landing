import Container from "./style";
import Link from "next/link";
import Card from "../card";

const SectionThree = () => {
  return (
    <Container>
      <div className="section-wrapper">
        <div className="section-title-box">
          <h2 className="main-titles">Быстро и надежно</h2>
          <p className="main-texts section-three-text">
            Удобная система экономящая вам время и нервы
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
            title="Система безопасности личных данных"
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
            background="#E6E6EC"
          />{" "}
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
          />
          <Card
            horizontal
            // vertical
            // reverse
            button={{
              text: "Доступно",
              onClick: () => console.log("SEE MORE"),
            }}
            title="Онлайн бронирование"
            image={"/mobile-img.png"}
          />
        </div>
        {/* <Card vertical /> */}
      </div>
    </Container>
  );
};
export default SectionThree;