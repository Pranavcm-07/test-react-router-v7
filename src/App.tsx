import {HeroUIProvider} from "@heroui/react";
import {BrowserRouter} from "react-router";

function App() {

  return (
    <>
        <BrowserRouter>
            <HeroUIProvider>
                <div>
                    <p className={"text-6xl justify-end text-red-500"}>Hello Vite + React!</p>
                </div>
            </HeroUIProvider>
        </BrowserRouter>
    </>
  )
}

export default App
