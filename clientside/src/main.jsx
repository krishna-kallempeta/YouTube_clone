import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux"
import { legacy_createStore as createStore } from 'redux';
import {thunk} from "redux-thunk"
import {applyMiddleware, compose} from 'redux'
// import {createStore} from 'redux'
import Reducers from './Reducers'


const store = createStore(Reducers,compose(applyMiddleware(thunk)))
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
     </Provider>
)
