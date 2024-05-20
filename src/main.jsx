import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { createRoot } from "react-dom/client";

// import { createBrowserRouter,Route,RouterProvider,Link } 
// from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';



// const router = createBrowserRouter([
//   {
//     path: "/aeronaax",
//     element: <App />
//   }
// ]);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />

// );


ReactDOM.render(
  <BrowserRouter basename="/aeronaxx">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
 
  // ReactDOM.createRoot(document.getElementById('root')).render(
  //   <RouterProvider router={router} />
  //   // <React.StrictMode>
  //   //   <App />
  //   // </React.StrictMode>,
  // )
