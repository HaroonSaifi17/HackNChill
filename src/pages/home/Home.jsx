import "./Home.css";
import Navbar from "./../../component/navbar/Navbar";
import Hero from "./../../component/hero/Hero";
import About from "./../../component/about/About";
import Theme from "./../../component/themes/Themes";
import Timeline from "./../../component/timeline/Timeline";
import Event from "./../../component/event/Event";
import Prices from "./../../component/prices/Prices";
import Sponser from "./../../component/sponser/Sponser";
import Help from "./../../component/help/Help";
import Footer from "./../../component/footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Theme />
      <Timeline />
      <Event />
      <Prices />
      <Sponser />
      <Help />
      <Footer />
    </>
  );
}

export default Home;
