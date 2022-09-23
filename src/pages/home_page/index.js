import Header from "../../components/header";
import Hero from "../../components/hero";
import UnderHero from "../../components/underHero";
import SectionThree from "../../components/section-3";
import SectionFour from "../../components/section-4";
import SectionFive from "../../components/section-5";
import Footer from "../../components/footer";
import Container from "./style";
import { useMemo } from "react";

const HomePage = () => {
  const sectionThree = useMemo(
    () => ({
      title: "Быстро и надежно",
      description: "Удобная система экономящая вам время и нервы",
      data: [
        {
          id: 0,
          horizontal: true,
          title: "Система безопасности личных данных",
          image: "/clinic-hero-img.png",
          button: {
            text: "Доступно",
            onClick: () => console.log("card 1"),
          },
        },
        {
          id: 1,
          vertical: true,
          title: "Доступно для iPhone и Android + Умные часы",
          image: "/mobile-img.png",
          button: {
            text: "Доступно",
            onClick: () => console.log("card 2"),
          },
        },
        {
          id: 2,
          vertical: true,
          title: "Доступно для iPhone и Android + Умные часы",
          image: "/mobile-img.png",
          button: {
            text: "Доступно",
            onClick: () => console.log("card 3"),
          },
        },
        {
          id: 3,
          horizontal: true,
          title: "Онлайн бронирование",
          image: "/mobile-img.png",
          button: {
            text: "Доступно",
            onClick: () => console.log("card 2"),
          },
        },
      ],
    }),
    []
  );
  const sectionFour = useMemo(
    () => ({
      title: "Информативно и достоверно",
      description: "Полноценная информация о медучреждениях и о врачах",
      data: [
        {
          id: 0,
          vertical: true,
          title: "Доступно для iPhone и Android + Умные часы",
          image: "/mobile-img.png",
          background: "#E6E6EC",
          button: {
            text: "Доступно",
            onClick: () => console.log("card 1"),
          },
        },
        {
          id: 1,
          vertical: true,
          reverse: true,
          title: "Доступно для iPhone и Android + Умные часы",
          image: "/mobile-img.png",
          background: "#F2F2F7",
          button: {
            text: "Доступно",
            onClick: () => console.log("card 2"),
          },
        },
        {
          id: 2,
          horizontal: true,
          title: "Все медучреждения с рейтингом обслуживания",
          image: "/mobile-img.png",
          color: "white",
          background: "#000",
          button: {
            text: "Доступно",
            onClick: () => console.log("card 3"),
          },
        },
      ],
    }),
    []
  );
  const sectionFive = useMemo(
    () => ({
      title: "Cashback система",
      description: "Открыв карту лояльности вы получите приветственные 10 000 баллов",
      data: [
        {
          id: 0,
          // vertical: true,
          title: "Cashback до 15% при каждом обслуживании",
          image: "/mobile-img.png",
          button: {
            text: "Доступно",
            onClick: () => console.log("card 1"),
          },
        },
        {
          id: 1,
          vertical: true,
          title: "Доступно для iPhone и Android + Умные часы",
          image: "/mobile-img.png",
          background: "#FFF",
          button: {
            text: "Доступно",
            onClick: () => console.log("card 2"),
          },
        },
        {
          id: 2,
          vertical: true,
          title: "Доступно для iPhone и Android + Умные часы",
          image: "/mobile-img.png",
          color: "#fff",
          background: "#007AFF",
          button: {
            text: "Доступно",
            onClick: () => console.log("card 3"),
          },
        },
      ],
    }),
    []
  );
  return (
    <Container>
      <Header />
      <Hero />
      <UnderHero
        title="Цифровая медицина."
        subtitle="Все клиники и врачи в кармане."
      />
      <SectionThree {...sectionThree} />
      <SectionFour {...sectionFour} />
      <SectionFive {...sectionFive} />
      <Footer
        title="MEDBOX"
        subtitle="Для меня,  для тебя,  для всех!"
      />
    </Container>
  );
};

export default HomePage;
