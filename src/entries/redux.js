import { createStore } from 'redux';

// es buena práctica declarar a las variables con $ aquellas que tienen elementos del DOM
const $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData($form);
  const title = data.get('title');

  store.dispatch({
    type: 'ADD_SONG',
    payload: {
      title
    }
  })
}
/**
Reducer: función que retorna el proximo estado
PreLoadState/initialState: Estado inicial de la aplicación, la primera carga, el llamado a una data, cualquier tipo de dato
enhancer: Función para extender redux con capacidades añadidas x librerías externas
*/
//const store = createStore( reducer,  initialState, enhancer )
const initialState = [
  {
     "title": "master of pupets"
  },
  {
    "title": "rock or bust"
  }
];

const reducer = ( state, action ) => {
  switch ( action.type ) {
    case 'ADD_SONG':
       //payload ya es un objeto, x eso no lo ponemos entre llaves
       return [...state, action.payload]
    default:
       return state

  }
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const $container = document.getElementById('playList');
const playList = store.getState();
playList.map(item => {
  const template = document.createElement('p');
  template.textContent = item.title;
  $container.appendChild(template);
})
console.log(store.getState());
