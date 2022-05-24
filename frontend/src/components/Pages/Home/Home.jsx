import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import Footer from "./Sections/Footer";

const Home = () => {
  return (
    <main>
      {/* INTRO*/}
      <Section1 />

      {/*BUY RENT SELL  */}
      <Section2 />

      {/* BEST HOUSES */}
      <Section3 />


      <Footer />
    </main>
  );
};

export default Home;
