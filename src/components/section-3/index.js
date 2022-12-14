import Container from "./style";
import Card from "../card";

const SectionThree = ({ title, subtitle, data, clinic }) => {
  return (
    <Container clinic={clinic}>
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
export default SectionThree;
