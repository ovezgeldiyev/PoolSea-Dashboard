import React from "react";
import Header from "../base/Header";
import Select from "../components/Select";

const data = [
  {
    id: 1,
    text: "Pulsechain",
    img: "./images/dashboard/icons/pulse-white.png",
  },
  { id: 2, text: "Ethereum", img: "./images/dashboard/icons/ethereum.svg" },
];
export default function Swap(props) {
  return (
    <section className="dash">
      <div className="auto__container">
        <Header
          title="Swap"
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
          <div className="swap">
            <div className="swap__top">
              <div className="swap__header">
                <div className="swap__header-side">
                  <p className="active">Swap</p>
                  <p>Limit</p>
                  <p>P2P</p>
                </div>
                <div className="swap__header-side">
                  <span>
                    <img src="./images/dashboard/swap/refresh.png" alt="" />
                  </span>
                  <span>
                    <img src="./images/dashboard/swap/plus.png" alt="" />
                  </span>
                  <span>
                    <img src="./images/dashboard/swap/filter.png" alt="" />
                  </span>
                </div>
              </div>
              <div className="swap__main">
                <div className="swap__main-item">
                  <p>You sell</p>
                  <div className="swap__main-item-row">
                    <h6 className="big">
                      <span>
                        <img src="/images/dashboard/swap/pulse.png" alt="" />
                      </span>
                      stPLS
                      <span>
                        <img
                          src="/images/dashboard/swap/chevron-down.png"
                          alt=""
                        />
                      </span>
                    </h6>
                    <h6 className="big">500,000</h6>
                  </div>
                  <div className="swap__main-item-row">
                    <p>Staked Pulsechain</p>
                    <p>$0.0069420</p>
                  </div>
                </div>
                <span>
                  <img src="./images/dashboard/swap/arrow-down.png" alt="" />
                </span>
                <div className="swap__main-item">
                  <p>You buy</p>
                  <div className="swap__main-item-row">
                    <h6 className="big">
                      <span>
                        <img src="/images/dashboard/swap/gol.png" alt="" />
                      </span>
                      GOL
                      <span>
                        <img
                          src="/images/dashboard/swap/chevron-down.png"
                          alt=""
                        />
                      </span>
                    </h6>
                    <h6 className="big">100.888</h6>
                  </div>
                  <div className="swap__main-item-row">
                    <p>Gold ounce pegged stable coin.</p>
                    <p>$1,801.78</p>
                  </div>
                </div>
              </div>
              <a href="/" className="button">
                <span>
                  <img src="./images/dashboard/icons/wallet-blue.png" alt="" />
                </span>
                Connect wallet
              </a>
            </div>
            <div className="swap__bottom">
              <div className="swap__bottom-item">
                <p className="chevron">
                  <b>GOL buy price</b>
                  <span>
                    <img
                      src="./images/dashboard/swap/chevron-down.png"
                      alt=""
                    />
                  </span>
                </p>
                <p>
                  20,000
                  <span>
                    <img src="./images/dashboard/icons/pulsechain.png" alt="" />
                  </span>
                  <b>~$1.003758</b>
                </p>
              </div>
              <div className="swap__bottom-item">
                <p>
                  <b>Tx cost</b>
                </p>
                <p>
                  <b className="blue">Edit</b>
                  <span>
                    <img src="./images/dashboard/swap/horse.png" alt="" />
                  </span>
                  <b> Market </b>
                  ~$3.09430
                </p>
              </div>
              <div className="swap__bottom-item">
                <p>
                  <b>Route</b>
                </p>
                <p>
                  <b>stPLS</b>
                  <span>
                    <img
                      src="./images/dashboard/swap/chevron-right.png"
                      alt=""
                    />
                  </span>
                  <b>GOL</b>
                  <span>
                    <img src="./images/dashboard/swap/expand.png" alt="" />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
