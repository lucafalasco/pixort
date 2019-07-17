import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/App'
import { Provider } from 'mobx-react'
import state from './state'

import 'tachyons'
import './style.css'

ReactDOM.render(
  <Provider state={state}>
    <App />
  </Provider>,
  document.getElementById('root')
)
