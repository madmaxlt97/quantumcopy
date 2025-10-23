import Header from "../components/Header";
import SignUpComp from "../components/SignUpComp";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Warning from "../components/Warning";
import "../styles/HomePage.css";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <SignUpComp />
        <Features />
        <Warning />
      </main>
      <Footer />
    </>
  );
}
