import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service';
import { DateContext } from './ContextConfig';

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

]);


function App() {
  return (
    <DateContext.Provider value="10feb2024">
      <RouterProvider router={router} />
    </DateContext.Provider>
  
  );
}

export default App;
