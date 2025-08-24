import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import "./i18n";
import Layout from './Layout/Layout';
import BuyCar from './Pages/BuyCar/BuyCar';

const routes = createBrowserRouter([
  {path:"", element: <Layout/>, children:[
    { index: true, element: <BuyCar /> },
  ]}
])

function App() {

  return (
    <RouterProvider router={routes}/>
  )
}

export default App
