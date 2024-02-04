import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home';

let router = createBrowserRouter([
  {
    path:"home",
    element:<Home/>
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
