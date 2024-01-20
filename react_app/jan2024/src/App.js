import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
//npm install react-router-dom
import {  createBrowserRouter,RouterProvider} from "react-router-dom";
import Header from './Header';

let routerList = createBrowserRouter([
  {
    path:"home",
    element:<Home/>
  },{
    path:"about",
    element:<About/>
  },{
    path:"contact",
    element:<Contact/>
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