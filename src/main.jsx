// main.js

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './configurations/store'
import RouterComponent from './configurations/router'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <RouterComponent />
  </Provider>,
  document.getElementById('root')
)
