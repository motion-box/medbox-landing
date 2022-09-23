import Header from "../../components/header";
import Hero from "../../components/hero";
import UnderHero from "../../components/underHero";
import SectionThree from "../../components/section-3";
import SectionFour from "../../components/section-4";
import SectionFive from "../../components/section-5";
import Footer from "../../components/footer";
import Container from "./style";

const HomePage = () => {
  return (
    <Container>
      <Header />
      {/* <div>Home Page</div> */}
      <Hero />
      <UnderHero />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </Container>
  );
};

export default HomePage;
