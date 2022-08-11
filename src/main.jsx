import React from 'react'
// import ReactDOM from 'react-dom/client'
import ReactDOM from 'react-dom';
import App from './App'
import './index.css'
import 'lib-flexible/flexible'
import { BrowserRouter as Router } from "react-router-dom"

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);