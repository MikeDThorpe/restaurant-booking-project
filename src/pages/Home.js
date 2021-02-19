import React from "react";
import {RestaurantCards} from '../components'
import {ImageCarousel} from '../components'

function Home(props) {
  return (
    <div>
      <ImageCarousel />
      <RestaurantCards />
    </div>
  );
}

export default Home;