import Container from "./style";
import Link from "next/link";
import Card from "../card";

// const SectionFive = () => {
//   return (
//     <Container>
//       <div className="section-wrapper">
//         <div className="section-title-box">
//           <h2 className="main-titles">Cashback система</h2>
//           <p className="main-texts section-five-text">
//             Открыв карту лояльности вы получите приветственные 10 000 баллов
//           </p>
//         </div>
//         <div className="section-box">

//           <Card
//             // horizontal
//             // vertical
//             // reverse
//             button={{
//               text: "Доступно",
//               onClick: () => console.log("SEE MORE"),
//             }}
//             title="Cashback до 15% при каждом обслуживании"
//             // image={"/mobile-img.png"}
//           />
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
//             background="#FFF"
//           />{" "}
//           <Card
//             // horizontal
//             vertical
//             // reverse
//             button={{
//               text: "Доступно",
//               onClick: () => console.log("SEE MORE"),
//             }}
//             title="Доступно для iPhone и Android + Умные часы"
//             color="#fff"
//             image={"/mobile-img.png"}
//             background="#007AFF"
//           />
//         </div>
//         {/* <Card vertical /> */}
//       </div>
//     </Container>
//   );
// };
// export default SectionFive;
const SectionFive = ({ title, subtitle, data }) => {
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
export default SectionFive;