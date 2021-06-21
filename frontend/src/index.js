import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'

import './index.css'
import App from './App'
import tokenReducer from './reducers/tokenReducer'
import notificationReducer from './reducers/notificationReducer'
import userReducer from './reducers/userReducer'
import reportWebVitals from './reportWebVitals'

const reducer = combineReducers({
  token: tokenReducer,
  notification: notificationReducer,
  currentUser: userReducer,
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  ))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()