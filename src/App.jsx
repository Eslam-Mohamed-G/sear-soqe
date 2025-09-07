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
import UserProfile from './pages/UserProfile/UserProfile';
import SpecificCarAd from './pages/SpecificCarAd/SpecificCarAd';
import CarGuide from './pages/carGuide/carGuide';

const routes = createBrowserRouter([
  {path:"", element: <Layout/>, children:[
    { index: true, element: <HomePage/> },
    { path: 'buycar', element: <BuyCar/>},
    { path: 'sealcar', element: <SealCar/>},
    { path: 'carGuide', element: <CarGuide/>},
    { path: 'register', element: <Register/>},
    { path: 'login', element: <Login/>},
    { path: '/profile', element: <UserProfile/>},
    { path: '/specificOffer/:id', element: <SpecificCarAd/>},
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
