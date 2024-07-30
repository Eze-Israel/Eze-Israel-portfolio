import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Skills from "./pages/Skills"
import Cv from "./pages/Cv"
import Project from './pages/Project';
const router = createHashRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<App />}
      errorElement={<a href='./'><h1>Sorry! an error occured click here to go back</h1></a>} 
    >
      <Route 
        index
        element={<Home />}
      />
      <Route 
        path='about'
        element={<About />}
      />
      <Route 
        path='contact'
        element={<Contact />}
      />
      <Route 
        path='skills'
        element={<Skills />}
      />
      <Route 
        path='cv'
        element={<Cv />}
      />
      <Route 
        path='project'
        element={<Project/>}
      />
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);





