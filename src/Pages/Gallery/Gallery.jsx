import React, { Component } from "react";
import Image1 from "../../Assets/Images/001.png";
import Image2 from "../../Assets/Images/002.png";
import Image3 from "../../Assets/Images/003.png";
import "./Gallery.scss";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="gallery">
        <div className="title">Gallery</div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="image">
                <img src={Image1} alt="img-1" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="image">
                <img src={Image2} alt="img-2" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="image">
                <img src={Image3} alt="img-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
