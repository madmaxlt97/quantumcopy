import Header from "../components/Header";
import AboutUs from "../components/AboutPageComps/AboutUs";
import Warning from "../components/Warning";
import Footer from "../components/Footer";
import OurMission from "../components/AboutPageComps/OurMission";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutUs />
        <OurMission />
        <Warning />
      </main>
      <Footer />
    </>
  );
}
