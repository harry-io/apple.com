import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <ChakraProvider resetCSS={false}>
        <AllRoutes />
      </ChakraProvider>
    </div>
  );
}

export default App;
