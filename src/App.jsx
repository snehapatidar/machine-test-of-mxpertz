import AllRoutes from "./Component/AllRoutes";
import Navabar from "./Component/Navbar/Navabar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navabar />
        <AllRoutes />
      </Router>
    </>
  );
}
export default App;
