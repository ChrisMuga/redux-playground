import React, { Component } from 'react'
import Main from './components/Main'
import './css/Native.css'

// redux stuff
import {Provider} from 'react-redux'
import store from './redux/store/index'
class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Main/>
      </Provider>
    )
  }
}

export default App
