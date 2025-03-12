import {HeroUIProvider} from "@heroui/react";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router";
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
  ],{
      future: {
          v7_relativeSplatPath: true,
          v7_startTransition: true,
          v7_fetcherPersist: true,
          v7_normalizeFormMethod: true,
          v7_partialHydration: true,
          v7_skipActionErrorRevalidation: true,
      }
  })

  return (
    <>
        <RouterProvider router={routes}/>
    </>
  )
}

export default App
