import Navbar from "../components/navbar";
import Footer from "../components/footer";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col text-gray-900 dark:text-gray-100 transition-colors duration-300 scroll-smooth">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
