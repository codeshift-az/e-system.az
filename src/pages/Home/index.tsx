import Layout from "@/components/Layout";

import * as Sections from "./sections";

const Home = () => {
  return (
    <Layout>
      <div className="wrapper">
        <Sections.Banner />
        <Sections.Clients />
        <Sections.About />
        <Sections.Subscribe />
        <Sections.Features />
        <Sections.ChooseUs />
        <Sections.FunFactor />
        <Sections.Overview />
        <Sections.Team />
        <Sections.Pricing />
        <Sections.Testimonials />
        <Sections.Blog />
      </div>
    </Layout>
  );
};

export default Home;
