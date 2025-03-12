import {HeroUIProvider} from "@heroui/react";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Landing from "./pages/landing";

function App() {

    const RootLayout = () => {
        return (
            <HeroUIProvider>
                <Outlet/>
            </HeroUIProvider>
        )
    }

  const routes = createBrowserRouter([
      {
          element: <RootLayout/>,
          children: [
              { path: "/", element: <Landing/> }
          ]
      }
  ])

  return (
    <>
        <RouterProvider router={routes}/>
    </>
  )
}

export default App
