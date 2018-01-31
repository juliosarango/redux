import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/containers/home'

import data from '../api.json'

const homeContainer = document.getElementById('home-container')

// ReactDOM.render(que voy a renderizar, donde lo haré);
//const holaMundo = <h1>hola Estudiante de platzi.!</h1>;
//ReactDOM.render(<Media author = "Julio Sarango" title =  "Que es bitcoin...??" image = "./images/covers/bitcoin.jpg"/> , homeContainer);

ReactDOM.render(<Home data={data} />, homeContainer)
