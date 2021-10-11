import React, { Component } from "react";
import "./Reservation.scss";
import Axios from "axios";
import { API_URL } from "../../Service/API_URL";

class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      sentence: "",
      friend: "",
      reservation: "",
      session: "",
      openSession: false,
    };
  }

  onChangeReservation = (e) => {
    switch (e) {
      case "hadir":
        this.setState({ openSession: true, reservation: e });
        break;
      case "ragu":
        this.setState({ openSession: false, reservation: e });
        break;
      case "batal":
        this.setState({ openSession: false, reservation: e });
        break;
      default:
        break;
    }
  };

  onReservation = async (e) => {
    e.preventDefault();
    const {
      name,
      sentence,
      friend,
      reservation,
      session,
      openSession,
    } = this.state;

    const dataReservation = Object();
    dataReservation.name = name;
    dataReservation.wish = sentence;
    dataReservation.friend = friend;
    dataReservation.reservation = reservation;
    dataReservation.session = openSession ? session : "-";

    if (!session) {
      alert("Anda belum memilih sesi");
    }
    try {
      const res = await Axios.post(API_URL + "wish/postWish", dataReservation);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }

    let url = `http://wa.me/${
      friend === "hilmi" ? "+6285156371589" : "+628987481821"
    }?text=Nama: ${name}%0aUcapan: ${sentence}%0aTeman dari: ${friend}%0aKehadiran: ${reservation}%0aSesi ke: ${
      openSession ? session : "-"
    }`;

    if (name && sentence && friend && reservation && session) {
      window.open(url, "_blank").focus();
      this.onClearForm();
    } else {
      alert("Isi data dengan benar");
    }
  };

  onClearForm = () => {
    document.getElementById("formReservation").reset();
    this.setState({
      name: "",
      sentence: "",
      friend: "",
      reservation: "",
      session: "",
      openSession: false,
    });
  };

  render() {
    return (
      <div className="reservation">
        <div className="title">Konfirmasi kehadiran</div>
        <div className="card-form">
          <form
            className="form"
            onSubmit={this.onReservation}
            id="formReservation"
          >
            <div className="mb-3">
              <label>Nama :</label>
              <input
                type="text"
                className="form-control form-control-sm"
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label>Ucapan dan Do'a :</label>
              <textarea
                type="text"
                className="form-control form-control-sm"
                rows="3"
                onChange={(e) => this.setState({ sentence: e.target.value })}
              ></textarea>
            </div>
            <div className="mb-3">
              <label>Teman dari :</label>
              <select
                className="form-control form-control-sm"
                onChange={(e) => this.setState({ friend: e.target.value })}
                defaultValue={"default"}
              >
                <option disabled hidden value="default">
                  Lisna / Hilmi ?
                </option>
                <option value="lisna">Lisna</option>
                <option value="hilmi">Hilmi</option>
              </select>
            </div>
            <div className="mb-3">
              <label>Kehadiran :</label>
              <div className="d-flex">
                <div>
                  <input
                    type="radio"
                    name="radio-group"
                    value="hadir"
                    onChange={(e) => this.onChangeReservation(e.target.value)}
                  />
                </div>
                <div style={{ marginLeft: "10px", fontSize: "14px" }}>
                  Saya akan hadir
                </div>
              </div>
              <div className="d-flex">
                <div>
                  <input
                    type="radio"
                    name="radio-group"
                    value="batal"
                    onChange={(e) => this.onChangeReservation(e.target.value)}
                  />
                </div>
                <div style={{ marginLeft: "10px", fontSize: "14px" }}>
                  Maaf, saya belum bisa hadir
                </div>
              </div>
            </div>
            {this.state.openSession ? (
              <div className="mb-3">
                <label>Sesi ke :</label>
                <select
                  className="form-control form-control-sm"
                  onChange={(e) => this.setState({ session: e.target.value })}
                >
                  <option selected hidden>
                    1 / 2 / 3 ?
                  </option>
                  <option value="1">Sesi 1 pukul 10:00 - 11:00</option>
                  <option value="2">Sesi 2 pukul 11:00 - 12:00</option>
                  <option value="3">Sesi 3 pukul 12:00 - 13:00</option>
                </select>
              </div>
            ) : (
              <div className="mb-3">
                <label>Sesi ke :</label>
                <select
                  className="form-control form-control-sm"
                  disabled
                  defaultValue={"default"}
                >
                  <option hidden disabled value="default">
                    -
                  </option>
                </select>
              </div>
            )}
            <button className="btn btn-primary btn-sm">KIRIM SEKARANG</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Reservation;
