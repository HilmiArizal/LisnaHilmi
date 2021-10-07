import React, { Component } from "react";
import "./Wish.scss";
import Axios from "axios";
import { API_URL } from "../../Service/API_URL";
import { GrPrevious, GrNext } from "react-icons/gr";

class Wish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataWish: [],
      index: 0,
    };
  }

  componentDidMount() {
    Axios.get(API_URL + "wish/getWish")
      .then((res) => {
        this.setState({ dataWish: res.data.dataWish });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onPrevious = () => {
    if (this.state.index - 1 >= 0) {
      this.setState({ index: this.state.index - 1 });
    }
  };

  onNext = () => {
    if (this.state.index + 1 <= this.state.dataWish.length - 1) {
      this.setState({ index: this.state.index + 1 });
    }
  };

  render() {
    return (
      <div className="wish-pray">
        <div className="title">Ucapan &amp; Do'a</div>
        <div className="wish-card">
          <div className="content">
            {this.state.dataWish.map((item, index) => {
              let position =
                index > this.state.index
                  ? "nextCard"
                  : index === this.state.index
                  ? "activeCard"
                  : "prevCard";
              return (
                <div className={position} key={index}>
                  <div className="icon-left" onClick={this.onPrevious}>
                    <GrPrevious />
                  </div>
                  <div className="row">
                    <div className="col-sm">
                      <div className="friend-name">{this.state.index === index ? item.name : ''}</div>
                      <div className="friend-wish">{this.state.index === index ? item.wish : ''}</div>
                    </div>
                  </div>
                  <div className="icon-right" onClick={this.onNext}>
                    <GrNext />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
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
