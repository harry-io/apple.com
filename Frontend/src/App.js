import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <AllRoutes />
      </ChakraProvider>
    </div>
  );
}

export default App;
