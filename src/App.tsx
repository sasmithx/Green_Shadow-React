import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {Dashboard} from "./pages/Dashboard/Dashboard.tsx";
import {Error} from "./pages/Error.tsx";
import {RootLayout} from "./components/RootLayout.tsx";
import {Vehicle} from "./pages/Vehicle/Vehicle.tsx";
import {Crop} from "./pages/Crop/Crop.tsx";
import {Staff} from "./pages/Staff/Staff.tsx";
import {Equipment} from "./pages/Equipment/Equipment.tsx";
import {Field} from "./pages/Field/Field.tsx";
import {MonitorLog} from "./pages/MonitorLog/MonitorLog.tsx";

function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      children: [
        {index: true, element: <Dashboard/>},
        {path: '/dashboard', element: <Dashboard/>},
        {path: '/vehicle', element: <Vehicle/>},
        {path: '/crop', element: <Crop/>},
        {path: '/staff', element: <Staff/>},
        {path: '/equipment', element: <Equipment/>},
        {path: '/field', element: <Field/>},
        {path: '/log', element: <MonitorLog/>},
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