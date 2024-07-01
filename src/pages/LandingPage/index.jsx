import Header from "../../Header";
import Footer from "../../Footer";
import styles from "./styles.module.css";
import Hero from "../../components/Hero";
import OurService from "../../components/OurService";
import WhyUs from "../../components/WhyUs";
import Testimoni from "../../components/Testimoni";
import RentBanner from "../../components/RentBanner";
import FAQ from "../../components/FAQ";

const LandingPage = () => (
  <>
    <div className={styles.headerContainer}>
      <Header />
      <Hero />
      <OurService />
      <WhyUs />
      <Testimoni />
      <RentBanner />
      <FAQ />
    </div>
    <Footer />
  </>
);

export default LandingPage;
