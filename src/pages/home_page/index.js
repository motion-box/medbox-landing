import Header from "../../components/header";
import Hero from "../../components/hero";
import SectionThree from "../../components/section-3";
import UnderHero from "../../components/underHero";
import Container from "./style";

const HomePage = () => {
  return (
    <Container>
      <Header />
      {/* <div>Home Page</div> */}
      <Hero />
      <UnderHero />
      <SectionThree />
    </Container>
  );
};

export default HomePage;
