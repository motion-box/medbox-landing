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
      description: "Административная панель дает возможность врачам удобно вести запись в анкеты посетивших их пациентов",
      data: [
        {
          id: 0,
          horizontal: true,
          title: "Множество возможностей с административной панелью",
          image: "/mobile-img.png",
          button: {
            text: "Доступно",
            onClick: () => console.log("card 1"),
          },
        },
        {
          id: 1,
          vertical: true,
          title: "Направлять на обследования",
          image: "/mobile-img.png",
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
      title: "Синтез речи",
      description: "Ручки с листками теперь никчему",
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
          title: "Синтез речи запишет вместо вас",
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
      title: "Синхронизаця с мед оборудованиями",
      description: "Обмен данными с диагностическими, лабораторными и рентгенографическими оборудованиями",
      data: [
        {
          id: 0,
          // vertical: true,
          title: "Потерии данных на листках теперь в прошлом",
          image: "/mobile-img.png",
          button: {
            text: "Доступно",
            onClick: () => console.log("card 1"),
          },
        },
        {
          id: 1,
          vertical: true,
          title: "Получение информации прямиком от оборудования ",
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
          title: "Данные хранятся в единой базе",
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
