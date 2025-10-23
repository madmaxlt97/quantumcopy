import Header from "../components/Header";
import Warning from "../components/Warning";
import Footer from "../components/Footer";
import LogInComp from "../components/LogInComps/LogIn";

export default function LogInPage() {
  return (
    <>
      <Header />
      <main>
        <LogInComp />
        <Warning />
      </main>
      <Footer />
    </>
  );
}
