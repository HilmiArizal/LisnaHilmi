import Axios from "axios";
import React, { Component } from "react";
import { API_URL, API_URL_IMAGE } from "../../Service/API_URL";
import "./Gallery.scss";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPrewedding: [],
    };
  }

  componentDidMount() {
    Axios.get(API_URL + `prewedding/getPrewedding`)
      .then((res) => {
        this.setState({ dataPrewedding: res.data.results });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="gallery">
        <div className="title">Gallery</div>
        <div className="row">
          {this.state.dataPrewedding.map((item, index) => {
            return (
              <div className="col-md-4">
                <div className="card">
                  <div className="image">
                    <img src={API_URL_IMAGE + item.image} alt="img-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Gallery;
