import { useState } from "react";

import "./App.css";

const App = () => {
  return (
    <main>
      <div className="pattern"></div>
      <div className="wrapper">
        <header>
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hassle
          </h1>
        </header>
      </div>
    </main>
  );
};

export default App;
