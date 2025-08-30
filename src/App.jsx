import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import "./i18n";
import Layout from './Layout/Layout';
import HomePage from './pages/HomePage/HomePage'
import BuyCar from './pages/BuyCar/BuyCar';
import SealCar from './pages/SealCar/SealCar';
import Register from './pages/Register/Register';

const routes = createBrowserRouter([
  {path:"", element: <Layout/>, children:[
    { index: true, element: <HomePage/> },
    { path: 'buycar', element: <BuyCar/>},
    { path: 'sealcar', element: <SealCar/>},
    { path: 'register', element: <Register/>},
  ]}
])

function App() {

  return (
    <RouterProvider router={routes}/>
  )
}

export default App
