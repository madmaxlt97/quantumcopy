import RegisteredUsers from "../components/DashboardPageComps/RegisteredUsersList";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function DashboardPage() {
  return (
    <>
      <Header />
      <main>
        <RegisteredUsers />
      </main>
      <Footer />
    </>
  );
}
