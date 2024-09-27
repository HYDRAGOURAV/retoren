import './App.css'
import Navbar from './components/Navbar';
import Index from './components/index';
import About from './components/about';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Footer from './components/footer';
function App() {
  const route = createBrowserRouter([
    {path:"/",element:<> <Navbar/> <Index/><Footer/> </>},
    {path:"/about",element:<> <Navbar/> <About/><Footer/></>},
    {path:"/",element:<> <Navbar/></>},
  ])
  return (
    <>
    <RouterProvider router={route}/>
    </>
  )
}

export default App
