import Header from "../components/Header";
import CareerForm from "../components/CareerPageComps/CareerForm";
import Warning from "../components/Warning";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <CareerForm />
        <Warning />
      </main>
      <Footer />
    </>
  );
}
