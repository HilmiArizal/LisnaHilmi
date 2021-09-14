import React, { Component } from "react";
import "./Event.scss";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="detail-event">
        <div className="title">Detail Acara</div>
        <div className="section-detail-event">
          <div className="akad">
            <div className="text">AKAD</div>
            <div className="date">5 DESEMBER 2021</div>
            <div className="time">08:00 - 09:30</div>
          </div>
          <div className="resepsi">
            <div className="text">RESEPSI</div>
            <div className="date">5 DESEMBER 2021</div>
            <div className="sesi">
              <div>SESI 1 : 10.00 - 11.00</div>
              <div>SESI 2 : 11.00 - 12.00</div>
              <div>SESI 3 : 12.00 - 13.00</div>
            </div>
          </div>
          <div className="place">
            <div className="text">HOTEL ENDAH PARAHYANGAN</div>
            <div className="address">
              Jl. Raya Cibeureum No.14, Campaka, Kec. Andir, Kota Bandung, Jawa
              Barat 40184
            </div>
            <div className="button">
              <button
                className="btn btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                LIHAT LOKASI ACARA
              </button>
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Google Maps Location
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <iframe
                        title="maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.540321531671!2d107.57695771495106!3d-6.945406994982046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e8b40e363c6b%3A0x4228645d0ad7b9b2!2sSarenOne%20Office!5e0!3m2!1sid!2sid!4v1631610356023!5m2!1sid!2sid"
                        width="400"
                        height="400"
                        allowfullscreen=""
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
