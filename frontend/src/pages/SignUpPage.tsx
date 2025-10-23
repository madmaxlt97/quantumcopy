import Header from "../components/Header";
import SignUpComp from "../components/SignUpComp";
import Warning from "../components/Warning";
import Footer from "../components/Footer";

export default function SignUpPage() {
  return (
    <>
      <Header />
      <main>
        <SignUpComp />
        <Warning />
      </main>
      <Footer />
    </>
  );
}
