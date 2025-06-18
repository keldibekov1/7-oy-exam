import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import CreatePhone from "./pages/phone/Phone";
import CreateColor from "./pages/colors/Colors";
import ManagePhone from "./pages/phone/ManagePhone";

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/create-phone" element={<CreatePhone />} />
          <Route path="/create-color" element={<CreateColor />} />
          <Route path="/manage-phone" element={<ManagePhone />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
