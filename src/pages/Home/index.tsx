// Sections
import Layout from "../../components/Layout";
import About from "./sections/AboutArea";
import Banner from "./sections/Banner";
import Blog from "./sections/Blog";
import ChooseUsArea from "./sections/ChooseUsArea";
import Clients from "./sections/Clients";
import Features from "./sections/Features";
import FunFactorArea from "./sections/FunFactorArea";
import OverView from "./sections/OverView";
import Pricing from "./sections/Pricing";
import SubscribeArea from "./sections/SubscribeArea";
import TeamArea from "./sections/TeamArea";
import Testimonials from "./sections/Testimonials";

function Home() {
  return (
    <Layout>
      <div className="wrapper">
        <Banner />
        <Clients />
        <About />
        <SubscribeArea />
        <Features />
        <ChooseUsArea />
        <FunFactorArea />
        <OverView />
        <TeamArea />
        <Pricing />
        <Testimonials />
        <Blog />
      </div>
    </Layout>
  );
}

export default Home;
