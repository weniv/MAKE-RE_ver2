import React from 'react'
import Modal from 'react-modal'
import App from './App'
import { hydrate, render } from 'react-dom'

// const container = document.getElementById('root')
// const root = ReactDOM.createRoot(container)

const rootElement = document.getElementById('root')

if (rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  )
} else {
  render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  )
}

// if (container.hasChildNodes()) {
//   ReactDOM.hydrateRoot(
//     container,
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   )
// } else {
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   )
// }

Modal.setAppElement('#root')
