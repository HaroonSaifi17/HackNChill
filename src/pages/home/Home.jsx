import "./Home.css";
import Hero from "./../../component/hero/Hero";
import About from "./../../component/about/About";
import Theme from "./../../component/themes/Themes";
import Timeline from "./../../component/timeline/Timeline";
import Event from "./../../component/event/Event";
import Prices from "./../../component/prices/Prices";
import Sponsor from "../../component/sponser/Sponsor.jsx";
import Help from "./../../component/help/Help";
import Footer from "./../../component/footer/Footer";
import Community from "../../component/Community/Community.jsx";
import Merchandise from "../../component/Merchandise/Merchandise";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Theme />
      <Timeline />
      <Event />
      <Prices />
      <Sponsor head={"MEET OUR SPONSORS"} id={"sponsor"} />
      {/* <Sponser head={"COMMUNITY PARTNERS"} id={"partners"} /> */}
      <Community head={"COMMUNITY PARTNERS"} id={"community"} />
      {/*<Merchandise head={"MERCHANDISE PARTNERS"} id={"merchandise"} />*/}
      <Help />
      <Footer />
    </>
  );
}

export default Home;
