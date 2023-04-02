import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <AllRoutes />
      <Toaster />
    </div>
  );
}

export default App;
