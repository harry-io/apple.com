import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <ChakraProvider resetCSS={false}>
        <AllRoutes />
      </ChakraProvider>
      <Toaster />
    </div>
  );
}

export default App;
