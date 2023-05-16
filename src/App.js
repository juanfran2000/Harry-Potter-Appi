import React, { useState, useEffect } from "react";
import Navbar from "./componentes/Navbar";
import Logo from "./componentes/logo";
import Heroo from "./componentes/Heroo";
import Personajes from "./componentes/personajes";
import Paginas from "./componentes/paginas";

function App() {
  return (
    <div>
      <Logo brand={"wikipotter"} />
      <div
        className="bg-image"
        style={{
          backgroundImage: `url('https://images7.alphacoders.com/119/1192080.jpg')`,
        }}
      >
        <Navbar />
        <Heroo />
        <div className="container mt-5 d-flex align-items-center justify-content-center">
          <Personajes />
        </div>
        <div className="d-flex align-items-center justify-content-center  bg-white text-center py-2" >
        <Paginas />
        </div>
      </div>
      <footer class="bg-dark text-white text-center py-3 ">
        <p class="mb-0">Realizado por jortega9</p>
      </footer>
    </div>
  );
}

export default App;
