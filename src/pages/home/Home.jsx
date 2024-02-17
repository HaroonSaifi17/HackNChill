import "./Home.css";
import Hero from "./../../component/hero/Hero";
import About from "./../../component/about/About";
import Theme from "./../../component/themes/Themes";
import Timeline from "./../../component/timeline/Timeline";
import Event from "./../../component/event/Event";
import Prices from "./../../component/prices/Prices";
import Sponser from "./../../component/sponser/Sponser";
import Help from "./../../component/help/Help";
import Footer from "./../../component/footer/Footer";
import Commuinty from "../../component/Community/Commuinty";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Theme />
      <Timeline />
      <Event />
      <Prices />
      <Sponser head={"MEET OUR SPONSORS"} id={"sponsor"} />
      {/* <Sponser head={"COMMUNITY PARTNERS"} id={"partners"} /> */}
      <Commuinty head={"COMMUNITY PARTNERS"} id={"community"} />
      <Help />
      <Footer />
    </>
  );
}

export default Home;
