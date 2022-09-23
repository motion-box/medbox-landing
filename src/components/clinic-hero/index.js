import Container from "./style";
import Link from "next/link";
import Image from "next/image";
import {
  HeroBubble1,
  HeroBubble2,
  HeroBubble3,
  HeroBubble4,
  HeroBubble5,
  HeroBubble6,
} from "../../resources";
import { motion, useScroll, useTransform } from "framer-motion";

const ClinicHero = () => {
  const { scrollY } = useScroll();
  const bubble1X = useTransform(scrollY, [0, 400], [0, -500]);
  const bubble1Y = useTransform(scrollY, [0, 400], [0, -200]);
  const bubble1Rotate = useTransform(scrollY, [0, 400], [-16.97, 100]);

  const bubble2X = useTransform(scrollY, [0, 450], [30, -700]);
  const bubble2Y = useTransform(scrollY, [0, 650], [50, 0]);
  const bubble2Rotate = useTransform(scrollY, [0, 250], [21.24, 45]);

  const bubble3X = useTransform(scrollY, [0, 400], [0, 700]);
  const bubble3Y = useTransform(scrollY, [0, 400], [0, -100]);
  const bubble3Rotate = useTransform(scrollY, [0, 400], [-14.11, 100]);

  const bubble4X = useTransform(scrollY, [0, 400], [0, 500]);
  const bubble4Y = useTransform(scrollY, [0, 400], [0, 100]);
  const bubble4Rotate = useTransform(scrollY, [0, 400], [15, 100]);

  const bubble5X = useTransform(scrollY, [0, 400], [-10, 700]);
  const bubble5Y = useTransform(scrollY, [0, 400], [-30, 100]);
  const bubble5Rotate = useTransform(scrollY, [0, 400], [-15, 100]);

  const bubble6X = useTransform(scrollY, [0, 400], [0, -700]);
  const bubble6Y = useTransform(scrollY, [0, 600], [0, -100]);
  const bubble6Rotate = useTransform(scrollY, [0, 400], [-15, 100]);

  const clinicHeroDashboardX = useTransform(scrollY, [0, 0], [0, 0]);
  const clinicHeroDashboardY = useTransform(scrollY, [0, 210], [0, 50]);
  const clinicHeroDashboardRotate = useTransform(scrollY, [0, 0], [0, 0]);

  //   const test = useTransform(scrollY, [440, 760, 900], [0, 4, 100]);

  return (
    <Container>
      <motion.div
        className="hero-part"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="hero-img-box"
          style={{
            x: clinicHeroDashboardX,
            y: clinicHeroDashboardY,
            rotate: clinicHeroDashboardRotate,
          }}
        >
          <Image
            src="/clinic-hero-img.png"
            layout="fill"
            objectFit="cover"
            alt="Our dashboard"
          />
        </motion.div>
        <motion.div
          className="hero-bubble hero-bubble_6"
          style={{
            x: bubble6X,
            y: bubble6Y,
            rotate: bubble6Rotate,
          }}
        >
          <HeroBubble6 />
        </motion.div>
        <motion.div
          className="hero-bubble hero-bubble_1"
          style={{
            x: bubble1X,
            y: bubble1Y,
            rotate: bubble1Rotate,
          }}
        >
          <HeroBubble1 />
        </motion.div>
        <motion.div
          className="hero-bubble hero-bubble_2"
          style={{
            x: bubble2X,
            y: bubble2Y,
            rotate: bubble2Rotate,
          }}
        >
          <HeroBubble2 />
        </motion.div>
        <motion.div
          className="hero-bubble hero-bubble_3"
          style={{
            x: bubble3X,
            y: bubble3Y,
            rotate: bubble3Rotate,
          }}
        >
          <HeroBubble3 />
        </motion.div>
        <motion.div
          className="hero-bubble hero-bubble_4"
          style={{
            x: bubble4X,
            y: bubble4Y,
            rotate: bubble4Rotate,
          }}
        >
          <HeroBubble4 />
        </motion.div>
        <motion.div
          className="hero-bubble hero-bubble_5"
          style={{
            x: bubble5X,
            y: bubble5Y,
            rotate: bubble5Rotate,
          }}
        >
          <HeroBubble5 />
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default ClinicHero;
