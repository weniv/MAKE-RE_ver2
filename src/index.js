import React from 'react'
import Modal from 'react-modal'
import ReactDOM from 'react-dom/client'
import App from './App'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    container,
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

Modal.setAppElement('#root')
