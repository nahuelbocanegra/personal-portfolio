import React from "react";
import { useState } from "react";
import img from "../assets/img/img";

export default function Project() {
  const [pag, setPag] = useState(0);

  const select = (num) => {
    if (num === 1) {
      return (
        <div className="pagina-cont">
          <a
            href="https://resonant-pasca-582aa6.netlify.app/"
            target={"_blank"}
          >
            <img  className="img" src={img.Ecomerc} alt="" />
            <span>Ir al sitio</span>
          </a>
          <p className="pag-text">
            <span>Ecommerce :</span>
             Desarrollado con React Js, Axios, React
            Router, Redux, Css "Diseño de un Ecommerce que simula la
            funcionalidad del mismo"
          </p>
        </div>
      );
    }
    if (num === 3) {
      return (
        <div className="pagina-cont">
          <a
            href="https://resplendent-malasada-a515e0.netlify.app/"
            target={"_blank"}
          >
            <img  className="img" src={img.morde} alt="" />
            <span>Ir al sitio</span>
          </a>
          <p className="pag-text">
            <span>Rick and Morty :</span>  Desarrollado con React Js, Axios, Css
            "Conoces a los personajes de la serie más popular al momento? puedes
            chequearlo visitando el link"
          </p>
        </div>
      );
    }
    if (num === 2) {
      return (
        <div className="pagina-cont">
          <a href="https://classy-wisp-22fc57.netlify.app/" target={"_blank"}>
            <img  className="img" src={img.pokeappi} alt="" />
            <span>Ir al sitio</span>
          </a>
          <p className="pag-text">
            {" "}
            <span>Pokedex :</span> Desarrollado con React Js, Axios, React
            Router, Redux, Css "Sitio Web para presentar todos los tipos de
            pokemones, con sus características y tipos.
          </p>
        </div>
      );
    }

    return (
      <div className="pagina-cont">
        <p className="pag-text">Seleccione una imagen, porfavor.</p>
      </div>
    );
  };

  return (
    <section className="Project">
      <div className="container-project">
        <div className="container">{select(pag)}</div>
        <div className="projects">
          <span
            onClick={() => {
              setPag(1);
            }}
          >
            <img className="img x" src={img.Ecomerc} alt="" />
          </span>
          <span
            onClick={() => {
              setPag(2);
            }}
          >
            <img className="img x" src={img.pokeappi} alt="" />
          </span>
          <span
            onClick={() => {
              setPag(3);
            }}
          >
            <img className="img x" src={img.morde} alt="" />
          </span>
        </div>
      </div>
    </section>
  );
}