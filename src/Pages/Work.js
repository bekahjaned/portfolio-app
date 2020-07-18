import React from "react";

import Banner from "../Components/Banner";
import ArtCard from "../Components/ArtCard";

import ImageBanner from "../images/websitebanner.png";

import Sushi from "../images/fastfood.jpg";
import Bear from "../images/bear-in-lake.jpg";
import Cake from "../images/birthday-cake.jpg";
import Compass from "../images/compass.jpg";
import Cube from "../images/fidget-cube.gif";
import Cat from "../images/gato.jpg";
import IceCream from "../images/icecream.jpg";
import Keyboard from "../images/keyboard.jpg";
import Knife from "../images/knife.jpg";
import Mango from "../images/mango.jpg";
import Map from "../images/map.jpg";
import Microphone from "../images/microphone.jpg";
import Mug from "../images/mug.jpg";
import Otter from "../images/otter.png";
import PolyCat from "../images/PolyCat.jpg";
import Pool from "../images/pool.jpg";
import Pozuelo from "../images/Pozuelo2.jpg";
import Ukelele from "../images/ukelele.jpg";
import Tuvok from "../images/Tuvok2.jpg";

class Work extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      designs: [
        { name: "pozuelo", image: Pozuelo },
        { name: "pool", image: Pool },
        { name: "bear", image: Bear },
        { name: "tuvok", image: Tuvok },
        { name: "cake", image: Cake },
        { name: "compas", image: Compass },
        { name: "cube", image: Cube },
        { name: "cat", image: Cat },
        { name: "otter", image: Otter },
        { name: "ice-cream", image: IceCream },
        { name: "keyboard", image: Keyboard },
        { name: "knife", image: Knife },
        { name: "mango", image: Mango },
        { name: "mug", image: Mug },
        { name: "polycat", image: PolyCat },
        { name: "ukelele", image: Ukelele },
        { name: "map", image: Map },
        { name: "microphone", image: Microphone },
        { name: "sushi", image: Sushi },
      ],
    };
  }

  render() {
    const { designs } = this.state;

    return (
      <div>
        <Banner display={ImageBanner} />
        <div className="cardGrid">
          {designs.map((design) => {
            return <ArtCard design={design} key={design.name} />;
          })}
        </div>
      </div>
    );
  }
}

export default Work;
