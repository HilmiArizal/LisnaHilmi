import React, { Component } from "react";
import "./Reservation.scss";

class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="reservation">
        <div className="title">Konfirmasi kehadiran!</div>
        {/* <div className="text">Pastikan kehadiran dan ucapan dari kamu :</div> */}

        <div className="card">
          <div className="form">
            <div className="mb-3">
              <label>Nama :</label>
              <input type="text" className="form-control form-control-sm" />
            </div>
            <div className="mb-3">
              <label>Ucapan :</label>
              <textarea
                type="text"
                className="form-control form-control-sm"
                rows="4"
              ></textarea>
            </div>
            <div className="mb-3">
              <label>Teman dari :</label>
              <select className="form-control form-control-sm">
                <option selected disabled hidden>Lisna / Hilmi ?</option>
                <option value="lisna">Lisna</option>
                <option value="hilmi">Hilmi</option>
              </select>
            </div>
            <div className="mb-3">
              <label>Kehadiran :</label>
              <div className="d-flex">
                <div>
                  <input type="radio" name="radio-group" value="hadir" />
                </div>
                <div style={{ marginLeft: "10px", fontSize: "14px" }}>
                  Saya akan hadir
                </div>
              </div>
              <div className="d-flex">
                <div>
                  <input type="radio" name="radio-group" value="ragu" defaultChecked />
                </div>
                <div style={{ marginLeft: "10px", fontSize: "14px" }}>
                  Saya masih ragu
                </div>
              </div>
              <div className="d-flex">
                <div>
                  <input type="radio" name="radio-group" value="batal" />
                </div>
                <div style={{ marginLeft: "10px", fontSize: "14px" }}>
                  Maaf, saya belum bisa hadir
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label>Sesi ke :</label>
              <select className="form-control form-control-sm">
                <option selected disabled hidden>1 / 2 / 3 ?</option>
                <option value="1">Sesi 1 pukul 10:00 - 11:00</option>
                <option value="2">Sesi 2 pukul 11:00 - 12:00</option>
                <option value="3">Sesi 3 pukul 12:00 - 13:00</option>
              </select>
            </div>
            <button className="btn btn-primary btn-sm">
                KIRIM SEKARANG
            </button>
          </div>

        </div>
      </div>
    );
  }
}

export default Reservation;
