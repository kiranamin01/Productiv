import React from "react";
import logoAcme from "../assets/logo-acme.png";
import logoApex from "../assets/logo-apex.png";
import logoCelestial from "../assets/logo-celestial.png";
import logoQuantum from "../assets/logo-quantum.png";
import logoEcho from "../assets/logo-echo.png";
import logoPulse from "../assets/logo-pulse.png";

const LogoTicker = () => {
  return (
    <section className="border border-gray-300">
      <div className="logoticker_section flex m-5">
        <img src={logoAcme} alt="acme logo" className="logo-ticker-img" />
        <img
          src={logoApex}
          alt="apex logo"
          width={150}
          height={150}
          className="logo-ticker-img"
        />
        <img
          src={logoCelestial}
          alt="celest logo"
          width={150}
          height={150}
          className="logo-ticker-img"
        />
        <img
          src={logoQuantum}
          alt="quant logo"
          width={150}
          height={150}
          className="logo-ticker-img"
        />
        <img
          src={logoEcho}
          alt="echo logo"
          width={150}
          height={150}
          className="logo-ticker-img"
        />
        <img
          src={logoPulse}
          alt="pulse logo"
          width={150}
          height={150}
          className="logo-ticker-img"
        />
      </div>
    </section>
  );
};

export default LogoTicker;
