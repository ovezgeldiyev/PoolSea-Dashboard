import React from "react";
import Header from "../base/Header";
import Select from "../components/Select";

const data = [
  {
    id: 1,
    text: "Pulsechain",
    img: "./images/dashboard/icons/pulsechain.png",
  },
  { id: 2, text: "Ethereum", img: "./images/dashboard/icons/ethereum.svg" },
];

export default function Home(props) {
  return (
    <section className="dash">
      <div className="auto__container">
        <Header title="Dashboard" sidebar = {props.sidebar} setSidebar={props.setSidebar}>
        <Select data={data} addClass="pulse dark" />

          <a href="/" className="button">
            <span>
              <img src="./images/dashboard/icons/wallet.png" alt="" />
            </span>
            Connet Wallet
          </a>
        </Header>
        <div className="dash__inner">
          <div className="dash__inner-row">
            <div className="dash__inner-col">
              <div className="dashItem">
                <div className="dashItem__title">
                  <span>
                    <img src="./images/dashboard/market/marketCap.png" alt="" />
                  </span>
                  <p>Market Cap</p>
                </div>
                <h6 className="big">$249,574,281.98</h6>
              </div>
              <div className="dashItem">
                <div className="dashItem__title">
                  <span>
                    <img src="./images/dashboard/market/apy.png" alt="" />
                  </span>
                  <p>APY Statistics</p>
                </div>
                <h6 className="big">$0.1960</h6>
              </div>
              <div className="dashItem">
                <div className="dashItem__title">
                  <span>
                    <img
                      src="./images/dashboard/market/nextRebase.png"
                      alt=""
                    />
                  </span>
                  <p>Next Rebase</p>
                </div>
                <h6 className="big">00:17:59</h6>
              </div>
              <div className="dashItem">
                <div className="dashItem__title">
                  <span>
                    <img
                      src="./images/dashboard/market/circulating.png"
                      alt=""
                    />
                  </span>
                  <p>Circulating Supply</p>
                </div>
                <h6 className="big">1,273,260,219</h6>
              </div>
              <div className="dashItem">
                <div className="dashItem__title">
                  <span>
                    <img src="./images/dashboard/market/backed.png" alt="" />
                  </span>
                  <p>Backed Liquidity</p>
                </div>
                <h6 className="big">159.14%</h6>
              </div>
              <div className="dashItem">
                <div className="dashItem__title">
                  <span>
                    <img
                      src="./images/dashboard/market/averageHolding.png"
                      alt=""
                    />
                  </span>
                  <p>Average Holding</p>
                </div>
                <h6 className="big">$$4,065.88</h6>
              </div>
            </div>
            <div className="dash__inner-col">
              <div className="dash__inner-col-title">
                <p>
                  <span>
                    <img src="./images/dashboard/icons/padlock.png" alt="" />
                  </span>
                  <b>Next Rebase</b>
                </p>
                <h5>$5,245,205.87 USD</h5>
              </div>
              <div className="dash__inner-col-currency">
                <div className="dash__inner-col-item">
                  <h6 className="big">$249,5</h6>
                  <p>
                    <span>
                      <img src="./images/dashboard/icons/hex.png" alt="" />
                    </span>
                    <b>HEX</b>
                  </p>
                </div>
                <div className="dash__inner-col-item">
                  <h6 className="big">$249,5</h6>
                  <p>
                    <span>
                      <img
                        src="./images/dashboard/icons/pulsechain.png"
                        alt=""
                      />
                    </span>
                    <b>PLS</b>
                  </p>
                </div>
                <div className="dash__inner-col-item">
                  <h6 className="big">$249,5</h6>
                  <p>
                    <span>
                      <img src="./images/dashboard/icons/plsx.png" alt="" />
                    </span>
                    <b>PLSX</b>
                  </p>
                </div>
              </div>
            </div>
            <div className="dash__inner-col sm">
              <div className="dash__inner-col-image">
                <img src="./images/dashboard/usdChart.png" alt="" />
                <div className="dash__inner-col-image-content">
                    <p>
                      Oct 17, 2022
                    </p>
                    <h6 className="big">
                      $0.44
                    </h6>
                </div>
              </div>
            </div>
            <div className="dash__inner-col sm">
              <div className="dash__inner-col-image">
                <img src="./images/dashboard/supply.png" alt="" />
              </div>
            </div>
          </div>
          <div className="dash__inner-row"></div>
          <div className="dash__inner-table-wrapper">
            <div className="dash__inner-table">
              <table>
                <thead>
                  <tr>
                    <th>Ticker</th>
                    <th>Address Name</th>
                    <th>Balance</th>
                    <th>Price</th>
                    <th>Value (USD)</th>
                    <th>Address</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>
                        <span>
                          <img src="./images/dashboard/pulse.png" alt="" />
                        </span>
                        <b>Pulse Chain</b>
                      </p>
                    </td>
                    <td>
                      <b>0x5555</b>
                    </td>
                    <td>
                      <b>207.962</b>
                    </td>
                    <td>
                      <b>$837.02</b>
                    </td>
                    <td>
                      <b>$2,365.01</b>
                    </td>
                    <td>
                      <b>0x1618</b>
                    </td>
                    <td>
                      <button type="button">
                        <img src="./images/dashboard/copy.png" alt="" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <span>
                          <img src="./images/dashboard/pulsex.png" alt="" />
                        </span>
                        <b>Pulsex</b>
                      </p>
                    </td>
                    <td>
                      <b>0x5555</b>
                    </td>
                    <td>
                      <b>207.962</b>
                    </td>
                    <td>
                      <b>$837.02</b>
                    </td>
                    <td>
                      <b>$2,365.01</b>
                    </td>
                    <td>
                      <b>0x1618</b>
                    </td>
                    <td>
                      <button type="button">
                        <img src="./images/dashboard/copy.png" alt="" />
                      </button>
                    </td>
                  </tr>
                  <tr className="last">
                    <td>
                      <p>
                        <span>
                          <img src="./images/dashboard/hex.png" alt="" />
                        </span>
                        <b>Hex</b>
                      </p>
                    </td>
                    <td>
                      <b>0x5555</b>
                    </td>
                    <td>
                      <b>207.962</b>
                    </td>
                    <td>
                      <b>$837.02</b>
                    </td>
                    <td>
                      <b>$2,365.01</b>
                    </td>
                    <td>
                      <b>0x1618</b>
                    </td>
                    <td>
                      <button type="button">
                        <img src="./images/dashboard/copy.png" alt="" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
