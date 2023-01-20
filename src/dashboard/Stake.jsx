import React from "react";
import Header from "../base/Header";
import Select from "../components/Select";

const data = [
  { id: 1, text: "Pulsechain", img:"./images/dashboard/icons/pulse-white.png" },
  { id: 2, text: "Ethereum", img:"./images/dashboard/icons/ethereum.svg" },
];

export default function Stake(props) {
  return (
    <section className="dash">
      <div className="auto__container">
        <Header
          title="Stake"
          sidebar={props.sidebar}
          setSidebar={props.setSidebar}
        >
          
          <Select data={data} addClass="pulse gear" />
          <a href="/" className="button gear">
            <span>
              <img src="./images/dashboard/icons/wallet-blue.png" alt="" />
            </span>
            Connet Wallet
          </a>
          <a href="/" className="dash__header-buttons-icon">
            <img src="./images/dashboard/icons/settings.png" alt="" />
          </a>
        </Header>
        <div className="dash__inner center">
          <div className="stake">
            <div className="stake__top">
              <div className="stake__top-row">
                <div className="stake__top-row-title">
                  <p className="active">
                    <b>Available to stake</b>
                  </p>
                  <h6 className="big">0.0 PLS</h6>
                </div>
                <div className="stake__top-row-info">
                  <p>0xC87b...afF807</p>
                  <span>
                    <img src="./images/dashboard/orange.png" alt="" />
                  </span>
                </div>
              </div>
              <hr />
              <div className="stake__top-row">
                <div className="stake__top-row-title">
                  <p>
                    <b>Staked Amount</b>
                  </p>
                  <h6 className="big">0.0 stPLS +</h6>
                </div>
                <div className="stake__top-row-title big">
                  <p>
                    <b>PoolSea APR</b>
                    <span>
                      <img src="./images/dashboard/question.png" alt="" />
                    </span>
                  </p>
                  <h6 className="big active">5.4%</h6>
                </div>
              </div>
            </div>

            <div className="stake__main">
              <form action="" className="stake__main-form">
                <div className="stake__main-form-input">
                  <span>
                    <img src="./images/dashboard/icons/pulsechain.png" alt="" />
                  </span>
                  <input type="text" placeholder="Amount" />
                  <button type="button">
                    <b>MAX</b>
                  </button>
                </div>
                <button type="submit" id="stakeSumbit">
                  Submit
                </button>
              </form>
              <div className="stake__main-list">
                <div className="stake__main-list-item">
                  <p>You will receive</p>
                  <p>0 stPLS</p>
                </div>
                <div className="stake__main-list-item">
                  <p>Exchange rate</p>
                  <p>1 PLS = 1stETH</p>
                </div>
                <div className="stake__main-list-item">
                  <p>Trasaction Cost</p>
                  <p>0.0001</p>
                </div>
                <div className="stake__main-list-item">
                  <p>
                    Reward fee
                    <span>
                      <img src="./images/dashboard/question.png" alt="" />
                    </span>
                  </p>
                  <p>10%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
