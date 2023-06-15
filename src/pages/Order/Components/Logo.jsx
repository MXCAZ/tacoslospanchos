import React from "react";
import Logo from "../img/logos.png";
import { useStyles } from "./styles";

export default function Logos() {
  return <img src={Logo} alt="Food Order" className="largeLogo" />;
}
