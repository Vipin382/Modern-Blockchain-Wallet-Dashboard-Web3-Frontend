import Navbar from "../Navbar";
import Footer from "../Footer";
import Sidebar from "@/components/Sidebar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-row">
        <Sidebar />
        <div className="w-full">{children}</div>
      </main>
      <Footer />
    </>
  );
}
