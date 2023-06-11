// main.js
import './index.css'


import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './configurations/store'
import RouterComponent from './configurations/router'

ReactDOM.render(
  
  <Provider store={store}>
    <RouterComponent />
  </Provider>,
  document.getElementById('root')
)
