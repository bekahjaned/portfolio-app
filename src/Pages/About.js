import React from "react";

import Hero from "../Components/Hero";

import Logo from "../images/dejongemaker-logo.png";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heroText: "Hello!",
    };
  }

  render() {
    return (
      <div className="container">
        <Hero text={this.state.heroText} />
        <div className="about">
          <img src={Logo} alt="logo" />
          <div className="aboutText">
            <h3>My name is Rebekah</h3>
            <p>I'm a graphic designer and lifetime crafter!</p>
            <p>
              My favourite things to design are birthday cards for my neices and
              nephews, but I also have experience designing logos, invitations,
              and illustrations.
            </p>
            <p>
              I started graphic design in Print Media and loved working on
              layouts of newletters, posters and business cards.
            </p>
            <p>
              Now this is something I get to for fun and help out my family and
              freinds!
            </p>
            <p>
              If you have questions, feel free to contact me{" "}
              <a href="/contact">here</a>.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
