/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";
import { Card } from "./components/card";
import { Navegador } from "./components/nav";

// COMPONENTES FUNCIONALES(SON ESTABLECIDAS CON FUNCIONES)

function App() {
  return (
    <>
      <Navegador />
      <div className="App">
        <div className="ContainerBox">
          <Card
            picture='img1.jpeg'
            altImagen='Programacion1'
            titulo='FrontEnd'
            text='En este curso aprenderemos las bases para ser un FrontEnd'
          />
          <Card
            picture='img2.jpeg'
            altImagen='Programacion1'
            titulo='Node Js'
            text='En este curso aprenderemos las bases de NodeJs'
          />
          <Card
            picture='img3.jpeg'
            altImagen='Programacion1'
            titulo='Json'
            text='En este curso aprenderemos las bases de Json'
          />
        </div>
      </div>
    </>
  );
}
export { App };
