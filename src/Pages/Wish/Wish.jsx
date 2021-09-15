import React, { Component } from "react";
import "./Wish.scss";

class Wish extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="wish-pray">
        <div className="title">Ucapan &amp; Do'a</div>
        <div className="wish-card"></div>
        <div className="couple-forever">
          <div className="row">
            <div className="and">&amp;</div>
            <div className="col-md-6">
              <div className="female">Lisna Astriani</div>
            </div>
            <div className="col-md-6">
              <div className="male">Hilmi Arizal</div>
            </div>
          </div>
          <div className="hashtag">#NaMiStory</div>
          <div className="thankyou">Hatur Nuhun</div>
          <div className="product">
            &copy; 2021 Invitation by{" "}
            <a
              href="https://hilmiarizal.github.io/PORTFOLIO-HILMI/hilmiarizal"
              target="_blank"
              rel="noreferrer"
            >
              https://hilmiarizal.github.io/PORTFOLIO-HILMI/hilmiarizal
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Wish;
