import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';

const App = () => {
  return(
    <div>
      <h1>Adopt me!</h1>
      <Pet name="Biguin" animal="dog" breed="dobberman" />
      <Pet name="Garfield" animal="cat" breed="strepsios" />
      <Pet name="Pitaceros" animal="dog" breed="rotveiller" />
    </div>
  )
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
