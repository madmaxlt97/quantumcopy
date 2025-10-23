import "../styles/Layout.css";
import Footer from "../components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <main className="page-content">{children}</main>
    </div>
  );
}
