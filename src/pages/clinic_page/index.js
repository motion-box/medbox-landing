import Header from "../../components/header";
import ClinicHero from "../../components/clinic-hero";
import UnderHero from "../../components/underHero";
import SectionThree from "../../components/section-3";
import SectionFour from "../../components/section-4";
import SectionFive from "../../components/section-5";
import Footer from "../../components/footer";
import Container from "./style";
import { useMemo } from "react";

const ClinicPage = () => {
  const sectionThree = useMemo(
    () => ({
      title: "Административная панель",
      subtitle:
        "Административная панель дает возможность врачам удобно вести запись в анкеты посетивших их пациентов",
      data: [
        {
          id: 0,
          horizontal: true,
          title: "Множество возможностей с административной панелью",
          image: "/admin-dashboard-card.png",
          button: {
            text: "Доступно",
            onClick: () => console.log("card 1"),
          },
        },
        {
          id: 1,
          vertical: true,
          title: "Направлять на обследования",
          image: "/direction-list-img.png",
          button: {
            text: "Доступно",
            onClick: () => console.log("card 2"),
          },
        },
        {
          id: 2,
          vertical: true,
          title: "Результаты анализов",
          image: "/mobile-img.png",
          button: {
            text: "Доступно",
            onClick: () => console.log("card 3"),
          },
        },
        {
          id: 3,
          horizontal: true,
          title: "Долой непонятным почергам",
          image: "/stress-img-card.png",
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
      title: "Синтез речи",
      subtitle: "Ручки с листками теперь никчему",
      data: [
        {
          id: 0,
          vertical: true,
          title: "Доступно для iPhone и Android + Умные часы",
          image: "/med-termins.jpg",
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
          image: "/available-phone.png",
          background: "#F2F2F7",
          button: {
            text: "Доступно",
            onClick: () => console.log("card 2"),
          },
        },
        {
          id: 2,
          horizontal: true,
          title: "Синтез речи запишет вместо вас",
          image: "/voice-recorder.png",
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
      title: "Синхронизаця с мед оборудованиями",
      subtitle:
        "Обмен данными с диагностическими, лабораторными и рентгенографическими оборудованиями",
      data: [
        {
          id: 0,
          vertical: true,
          reverse: true,
          title: "Потерии данных на листках теперь в прошлом",
          image: "/refresh-card-img.svg",
          button: {
            text: "Доступно",
            onClick: () => console.log("card 1"),
          },
        },
        {
          id: 1,
          vertical: true,
          title: "Получение информации прямиком от оборудования ",
          image: "/getting-info-machine.png",
          background: "#FFF",
          button: {
            text: "Доступно",
            onClick: () => console.log("card 2"),
          },
        },
        {
          id: 2,
          vertical: true,
          title: "Данные хранятся в единой базе",
          image: "/database-icon.svg",
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
      <ClinicHero />
      <UnderHero
        title="Цифровая медицина."
        subtitle="Удобное приложение для взаимодействия с пациентами"
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

export default ClinicPage;
