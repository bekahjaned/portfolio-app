import React from "react";

class ArtCard extends React.Component {
  render() {
    const { image } = this.props.design;

    return (
      <div className="card">
        <img className="design" src={image} alt="design" />
      </div>
    );
  }
}

export default ArtCard;
