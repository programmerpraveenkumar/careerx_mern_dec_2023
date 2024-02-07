import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service';

let router = createBrowserRouter([
  {
    path:"home",
    element:<Home/>
  },{
    path:"about",
    element:<About/>
  },{
    path:"service",
    element:<Service/>
  },
  {
    path:"",
    element:<Home/>
  }

])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
