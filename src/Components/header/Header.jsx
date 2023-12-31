import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import Sidebar from "../sidebar/Sidebar";
import Backdrop from "../backdrop/Backdrop";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useRecoilValue } from "recoil";
import { cartState } from "../global-state/cartItems";

export const navElements = [
  {
    label: "TESLA",
    route: "",
    style: {
      marginRight: "auto",
      letterSpacing: "7px",
    },
  },
  { label: "MODELX", route: "Modelx" },
  { label: "MODELS", route: "Models" },
  { label: "Cybertruck", route: "Crimetruck" },
  { label: "Shop", route: "Shop" },
  { label: <ShoppingCartIcon />, route: "Cart", style: { marginLeft: "auto" } },
  { label: "Menu", route: null },
];

export default function Header({ setShowSidebar }) {
  const navigate = useNavigate();
  const cartItems = useRecoilValue(cartState);

  return (
    <>
      <nav>
        <ul className="headerList">
          {navElements.map(({ label, route, style = {} }) => {
            if (route === "Cart") {
              return (
                <li
                  onClick={() => {
                    navigate(`/${route}`);
                  }}
                  key={route}
                  style={style}
                >
                  <span className="cart-items-count">{cartItems.length}</span>
                  {label}
                </li>
              );
            }
            return (
              <li
                style={style}
                key={label}
                onClick={() => {
                  if (label === "Menu") {
                    setShowSidebar(true);
                  } else {
                    navigate(`/${route}`);
                  }
                }}
              >
                {label}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
