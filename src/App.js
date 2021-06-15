import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      name: "Biguin",
      animal: "dog",
      breed: "dobberman",
    }),
    React.createElement(Pet, {
      name: "Garfield",
      animal: "cat",
      breed: "strepsios",
    }),
    React.createElement(Pet, {
      name: "Pitaceros",
      animal: "dog",
      breed: "rotveiller",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
