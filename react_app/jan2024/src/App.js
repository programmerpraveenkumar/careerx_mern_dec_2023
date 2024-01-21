import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
//npm install react-router-dom
import {  createBrowserRouter,RouterProvider} from "react-router-dom";
import Header from './Header';
import Login from './Login';

let routerList = createBrowserRouter([
  {
    path:"login",
    element:<Login/>
  },{
    path:"home",
    element:<Home/>
  },{
    path:"about",
    element:<About/>
  },{
    path:"contact",
    element:<Contact/>
  },{
    path:"",
    element:<Home/>
  }]
)

function App() {
  return (
    <div className="App">
      <Header/>
        <RouterProvider router={routerList}/>
    </div>
  );
}

export default App;


// localhost:3000/home->HomeComponent
// localhost:3000/about->aboutComponent