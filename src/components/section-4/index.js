import Container from "./style";
import Card from "../card";

// const SectionFour = () => {
//   return (
//     <Container>
//       <div className="section-wrapper">
//         <div className="section-title-box">
//           <h2 className="main-titles">Информативно и достоверно</h2>
//           <p className="main-texts section-four-text">
//             Полноценная информация о медучреждениях и о врачах
//           </p>
//         </div>
//         <div className="section-box">
//           <Card
//             // horizontal
//             vertical
//             // reverse
//             button={{
//               text: "Доступно",
//               onClick: () => console.log("SEE MORE"),
//             }}
//             title="Доступно для iPhone и Android + Умные часы"
//             image={"/mobile-img.png"}
//             background="#E6E6EC"
//           />{" "}
//           <Card
//             // horizontal
//             vertical
//             reverse
//             button={{
//               text: "Доступно",
//               onClick: () => console.log("SEE MORE"),
//             }}
//             title="Доступно для iPhone и Android + Умные часы"
//             image={"/mobile-img.png"}
//             background="#F2F2F7"
//           />
//           <Card
//             horizontal
//             // vertical
//             // reverse
//             button={{
//               text: "Доступно",
//               onClick: () => console.log("SEE MORE"),
//             }}
//             title="Все медучреждения с рейтингом обслуживания"
//             color="white"
//             image={"/mobile-img.png"}
//             background="#000"
//           />
//         </div>
//         {/* <Card vertical /> */}
//       </div>
//     </Container>
//   );
// };
// export default SectionFour;

const SectionFour = ({ title, subtitle, data }) => {
  return (
    <Container>
      <div className="section-wrapper">
        <div className="section-title-box">
          <h2 className="main-titles">{title}</h2>
          <p className="main-texts section-three-text">{subtitle}</p>
        </div>
        <div className="section-box">
          {data.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </Container>
  );
};
export default SectionFour;
