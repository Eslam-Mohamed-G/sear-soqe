import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import "./i18n";
import Layout from './Layout/Layout';
import HomePage from './pages/HomePage/HomePage'
import BuyCar from './pages/BuyCar/BuyCar';
import SealCar from './pages/SealCar/SealCar';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import StoreContextProvider from './Context/Context';

const routes = createBrowserRouter([
  {path:"", element: <Layout/>, children:[
    { index: true, element: <HomePage/> },
    { path: 'buycar', element: <BuyCar/>},
    { path: 'sealcar', element: <SealCar/>},
    { path: 'register', element: <Register/>},
    { path: 'login', element: <Login/>},
  ]}
])

function App() {

  return (
    <StoreContextProvider>
      <RouterProvider router={routes}/>
    </StoreContextProvider>
  )
}

export default App
