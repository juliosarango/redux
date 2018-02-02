import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home'

import data from '../api.json'

// unir reac con redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  data: {
    ...data
  }
}

const store = createStore(
  (state) => state,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const homeContainer = document.getElementById('home-container')

// ReactDOM.render(que voy a renderizar, donde lo haré);
//const holaMundo = <h1>hola Estudiante de platzi.!</h1>;
//ReactDOM.render(<Media author = "Julio Sarango" title =  "Que es bitcoin...??" image = "./images/covers/bitcoin.jpg"/> , homeContainer);

//El render cambia para la integración con react-redux
//ReactDOM.render(<Home data={data} />, homeContainer)
render(
  <Provider store = {store}>
    <Home />
  </Provider>,
  homeContainer);
