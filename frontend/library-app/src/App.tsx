import React from 'react';
import './App.css';
import {Navbar} from "./layouts/navbarAndFooter/Navbar";
import {ExploreTopBooks} from "./layouts/homepage/ExploreTopBooks";
import {Carousel} from "./layouts/homepage/Carousel";
import {Heros} from "./layouts/homepage/Heros";
import {LibraryServices} from "./layouts/homepage/LibraryServices";
import {Footer} from "./layouts/navbarAndFooter/Footer";

function App() {
  return (
      <div>
          <Navbar/>
          <ExploreTopBooks/>
          <Carousel/>
          <Heros/>
          <LibraryServices/>
          <Footer/>
      </div>
  );
}

export default App;
