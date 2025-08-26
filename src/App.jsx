import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import "./i18n";
import Layout from './Layout/Layout';
import HomePage from './pages/HomePage/HomePage'

const routes = createBrowserRouter([
  {path:"", element: <Layout/>, children:[
    { index: true, element: <HomePage/> },
  ]}
])

function App() {

  return (
    <RouterProvider router={routes}/>
  )
}

export default App
