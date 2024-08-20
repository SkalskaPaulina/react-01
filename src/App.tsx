import "./App.css";
import { NavBar } from "./component/NavBar";
import { SectionPage } from "./section/SectionPage";
import { SectionAbout } from "./section/SectionAbout";
import { SectionOffers } from "./section/SectionOffers";
import { Footer } from "./component/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <SectionPage />
        <SectionAbout />
        <SectionOffers />
      </main>
      <Footer />
    </div>
  );
}

export default App;
