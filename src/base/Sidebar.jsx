import React, { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Sidebar(props) {
  const location = useLocation();

  const close = (e) => {
    if (e.target === e.currentTarget) props.setActive(false);
  };

  useEffect(() => {
    props.setActive(false);
  }, [location]);

  return (
    <aside
      className={`sidebar ${props.active ? " active" : ""}`}
      onClick={close}
    >
      <div className="sidebar__inner">
        <div className="sidebar__inner-top">
          <Link to="/" className="sidebar__inner-logo">
            <span>
              <img src="./images/logo.svg" alt="" />
            </span>
            <p>PoolSea</p>
          </Link>
          <div className="sidebar__inner-nav">
            <NavLink to="" end>
              <span>
                <img src="./images/dashboard/icons/dashboard.png" alt="" />
              </span>
              Dashboard
            </NavLink>
            <a href="/">
              <span>
                <img src="./images/dashboard/icons/claim.png" alt="" />
              </span>
              Claim
            </a>
            <a href="/">
              <span>
                <img src="./images/dashboard/icons/calculator.png" alt="" />
              </span>
              Calculator
            </a>
            <NavLink to="stake">
              <span>
                <img src="./images/dashboard/icons/stake.png" alt="" />
              </span>
              Stake
            </NavLink>
            <NavLink to="swap">
              <span>
                <img src="./images/dashboard/icons/swap.png" alt="" />
              </span>
              Swap
            </NavLink>
            <a href="/">
              <span>
                <img src="./images/dashboard/icons/docs.png" alt="" />
              </span>
              Docs
            </a>
          </div>
        </div>

        <div className="sidebar__inner-bottom">
          <a href="/">
            <span>
              <img src="./images/dashboard/icons/settings.png" alt="" />
            </span>
            Settings
          </a>
          <a href="/">
            <span>
              <img src="./images/dashboard/icons/logout.png" alt="" />
            </span>
            Log out
          </a>
        </div>
      </div>
    </aside>
  );
}
