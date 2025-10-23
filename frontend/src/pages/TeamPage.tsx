import Header from "../components/Header";
import Team from "../components/TeamComps/Team";
import Warning from "../components/Warning";
import Footer from "../components/Footer";

export default function TeamPage() {
  return (
    <>
      <Header />
      <main>
        <Team />
        <Warning />
      </main>
      <Footer />
    </>
  );
}
