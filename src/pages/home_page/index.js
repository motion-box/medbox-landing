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
      subtitle: "Удобная система экономящая вам время и нервы",
      data: [
        {
          id: 0,
          horizontal: true,
          title: "Система безопасности личных данных",
          image: "/QR-code-img.jpg",
          button: {
            text: "Доступно",
            onClick: () => console.log("card 1"),
          },
        },
        {
          id: 1,
          vertical: true,
          title: "Быстрый поиск без сложных медицинских терминов",
          image: "/fast-search.png",
          background: "#E6E6EC",
          button: {
            text: "Доступно",
            onClick: () => console.log("card 2"),
          },
        },
        {
          id: 2,
          vertical: true,
          title: "Онлайн бронирование",
          image: "/online-bron.jpg",
          button: {
            text: "Доступно",
            onClick: () => console.log("card 3"),
          },
        },
        {
          id: 3,
          horizontal: true,
          title: "Следи за здоровьем семьи",
          image: "/family-card-img.jpg",
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
      subtitle: "Полноценная информация о медучреждениях и о врачах",
      data: [
        {
          id: 0,
          vertical: true,
          title: "Вся информация о клиниках и врачах",
          image: "/more-info.png",
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
          title: "Живая оценка клиники от пациентов",
          image: "/people-comment.png",
          background: "#F2F2F7",
          button: {
            text: "Доступно",
            onClick: () => console.log("card 2"),
          },
        },
        {
          id: 2,
          horizontal: true,
          title: "Медучреждения с чесным рейтингом обслуживания",
          image: "/world-rating.png",
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
      subtitle: "Привлекательные предложения для вас и вашего кармана",
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
          title:
            "Открыв карту лояльности вы получите приветственные  10 000 баллов",
          image: "/bonus-ball.png",
          background: "#FFF",
          button: {
            text: "Доступно",
            onClick: () => console.log("card 2"),
          },
        },
        {
          id: 2,
          vertical: true,
          title: "Возможность увеличения cashback",
          image: "/cashback-crown.svg",
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
        title="Цифровая медицина."
        subtitle="Доступно для iPhone и Android + Умные часы"
      />
    </Container>
  );
};

export default HomePage;
