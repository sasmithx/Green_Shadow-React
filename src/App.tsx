import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {Dashboard} from "./pages/Dashboard/Dashboard.tsx";
import {Error} from "./pages/Error.tsx";
import {RootLayout} from "./components/RootLayout.tsx";
import {Vehicle} from "./pages/Vehicle/Vehicle.tsx";

function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      children: [
        {path: '/', element: <Dashboard/>},
        {path: '/vehicle', element: <Vehicle/>},
        // {path: '/add', element: <Add/>},
        // {path: '/update', element: <Update/>},
        // {path: '/delete', element: <Delete/>},
      ]
    },
    {path: '*', element: <Error/>}
  ]);
  return (
    <>
        <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
