import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import "./i18n";
import Layout from './Layout/Layout';

const routes = createBrowserRouter([
  {path:"", element: <Layout/>, children:[]}
])

function App() {

  return (
    <RouterProvider router={routes}>
      <Outlet />
    </RouterProvider>
  )
}

export default App
