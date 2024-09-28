// Sections
import Layout from "../../components/Layout";
import About from "./sections/AboutArea";
import Banner from "./sections/Banner";
import Blog from "./sections/Blog";
import ChooseUsArea from "./sections/ChooseUsArea";
import Features from "./sections/Features";
import FunFactorArea from "./sections/FunFactorArea";
import Pricing from "./sections/Pricing";
import SubscribeArea from "./sections/SubscribeArea";
import TeamArea from "./sections/TeamArea";

function Home() {
  return (
    <Layout>
      <div className="wrapper">
        <Banner />
        <About />
        <SubscribeArea />
        <Features />
        <ChooseUsArea />
        <FunFactorArea />
        <TeamArea />
        <Pricing />
        <Blog />
      </div>
    </Layout>
  );
}

export default Home;
