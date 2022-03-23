import React from "react";
import "./css/main.css";
const Token = () => {
  return (
    <div id="token">
      <div className="token-container-style">
        <div className="token-row-style">
          <div className="token-col-style">
            <div style={{ marginLeft: "50px" }} className="section-title-style">
              <div className="token-section-title-style">
                <h1 className="token-heading">
                  Powering Data for the new <br /> equity blockchain.
                </h1>
              </div>
              <p
                style={{ color: "rgb(190, 171, 223)" }}
                className="small-text-p"
              >
                The highly the not having with lively. Our up with ran go her it
                gloomy the <br /> back, though however projected not for six
                with then, trusted as concepts <br /> belt.
              </p>
            </div>
            <div className="button-box-wrapper">
              <a 
              style={{ background: "#fff" }}
                class="donate-with-crypto button"
                href="https://www.coinbase.com/price/ethereum?tradeTab=buy"
              >
                Buy Token
              </a>
              <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807"></script>
            </div>
          </div>
          <div className="col-timer-style">
            <div className="timer-box-wrapper">
              <p className="countdown-text">Last moment to grab the token</p>
              <div className="countdown">
                <div className="displayedTime">
                  <div className="countBox">
                    <div className="countBoxItem">
                      <div className="label">Seconds</div>
                      <div className="count">55</div>
                    </div>
                    <span className="split">:</span>
                    <div className="countBoxItem">
                      <div className="label">Minutes</div>
                      <div className="count">46</div>
                    </div>
                    <span className="split">:</span>
                    <div className="countBoxItem">
                      <div className="label">Hours</div>
                      <div className="count">16</div>
                    </div>
                    <span className="split">:</span>
                    <div className="countBoxItem">
                      <div className="label">Days</div>
                      <div className="count">25</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-wrapper-second">
              <div className="box-wrapper-progress">
                <spn className="text-wrapper-dollar">$5,097</spn>
              </div>
              <span className="dollar">$11,931</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;
