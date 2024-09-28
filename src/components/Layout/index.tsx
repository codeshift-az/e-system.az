import { useLocation } from "react-router-dom";

// Components
import Header1 from "./Headers/Header1";
import Header2 from "./Headers/Header2";
import Footer from "./Footer";


interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/en/" ? <Header1 /> : <Header2 />}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
