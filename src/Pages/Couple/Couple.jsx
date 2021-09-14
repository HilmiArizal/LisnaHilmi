import React, { Component } from "react";
import Bismillah from "../../Assets/Images/bismillah.png";
import AvatarMale from "../../Assets/Images/male.png";
import AvatarFemale from "../../Assets/Images/female.png";
import Flower from "../../Assets/Images/flower.png";
import Flower2 from "../../Assets/Images/flower-2.png";
import { FaHeart } from "react-icons/fa";
import "./Couple.scss";

class Couple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 0,
      hours: 0,
      minutes: 0,
      second: 0,
    };
  }

  componentDidMount() {
    this.renderTimeEvent();
  }

  renderTimeEvent = () => {
    const goalDate = new Date("Dec 5, 2021 07:00:00").getTime();
    setInterval(() => {
      const nowDate = new Date().getTime();
      const results = goalDate - nowDate;

      const day = Math.floor(results / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (results % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((results % (1000 * 60 * 60)) / (1000 * 60));
      const second = Math.floor((results % (1000 * 60)) / 1000);

      this.setState({
        day: day,
        hours: hours,
        minutes: minutes,
        second: second,
      });
    }, 1000);
  };

  render() {
    return (
      <div className="couple">
        <div className="card">
          <div className="image-bismillah">
            <img src={Bismillah} alt="img-bismillah" />
          </div>
          <div className="text-muqodimah">
            <div className="salam">Assalamu'aikum Wr. Wb.</div>
            <div className="muqodimah">
              Atas nama Allah SWT yang Maha Pengasih dan Maha Penyayang, kami
              dengan senang hati untuk mengundang anda dan berbagi kegembiraan
              di pernikahan kami
            </div>
          </div>
          <div className="couple-identity">
            <div className="love">
              <FaHeart style={{ color: "#968984" }} />
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="female">
                  <div className="text">
                    <div className="name">Lisna Astriani, S.E., CTT</div>
                    <div className="as">Putri Tercinta</div>
                    <div className="son">
                      <div className="father">Bapak Asep Suhardi</div>
                      <div className="mother">Ibu Enung Tresnawati</div>
                    </div>
                  </div>
                  <div className="image">
                    <img src={AvatarFemale} alt="img-avatar" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="male">
                  <div className="image">
                    <img src={AvatarMale} alt="img-avatar" />
                  </div>
                  <div className="text">
                    <div className="name">Hilmi Arizal Santoso, S.M</div>
                    <div className="as">Putra Tercinta</div>
                    <div className="son">
                      <div className="father">Bapak Urip Santoso</div>
                      <div className="mother">Ibu Renni</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flower">
            <div className="image">
              <img src={Flower} alt="img-flower" />
            </div>
          </div>
          <div className="event">
            <div className="day">MINGGU</div>
            <div className="date">5 Desember 2021</div>
          </div>
          <div className="flower">
            <div className="image">
              <img src={Flower2} alt="img-flower" />
            </div>
          </div>
          <div className="wish">
            <div className="text">
              Merupakan suatu kehormatan dan kebahagian bagi kami apabila
              Bapak/Ibu/Saudara/i berkenan hadir dan memberikan Doa restu kepada
              kedua mempelai
            </div>
          </div>
          <div className="time">
            <div>
              {this.state.day} <span>Hari</span>
            </div>
            <div>
              {this.state.hours} <span>Jam</span>
            </div>
            <div>
              {this.state.minutes} <span>Menit</span>
            </div>
            <div>
              {this.state.second} <span>Detik</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Couple;
