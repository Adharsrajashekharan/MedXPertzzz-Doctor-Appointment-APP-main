import toast, { Toaster } from "react-hot-toast";
import Routers from "./Routers";




function App() {
  return (
    <>
      <div>
        <Routers/>
        <Toaster position="top-center" />
      </div>
    </>
  );
}

export default App;
