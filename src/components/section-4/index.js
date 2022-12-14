import Container from "./style";
import Card from "../card";

const SectionFour = ({ title, subtitle, data }) => {
  return (
    <Container>
      <div className="section-wrapper">
        <div className="section-title-box">
          <h2 className="main-titles">{title}</h2>
          <p className="main-texts section-four-text">{subtitle}</p>
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
