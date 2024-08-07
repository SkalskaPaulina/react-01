import './App.css';
import { NavBar } from './NavBar';
import {SectionPage } from "./SectionPage";
import { SectionAbout } from './SectionAbout';
import { SectionOffers } from './SectionOffers';
import { Footer } from './Footer';

function App() {
  return (
    <div className="background">
  <div className="container">
   <NavBar/>
   <main>
    <SectionPage/>
     <SectionAbout/>
     <SectionOffers/>
   </main>
   <Footer/>
 </div>
 </div>
  )
}

export default App;
