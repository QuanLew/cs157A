import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AccountBox from "./Account/AccountBox";
import EmployeeDetails from "./Pages/EmployeeDetails";
import EditEmployee from "./Pages/EditEmployee";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/employee" element={<EmployeeDetails />} />
        <Route path="/employee/editID/:id" element={<EditEmployee />} />
        <Route path="/account" element={<AccountBox />} />
      </Routes>
    </Router>
  );
}

export default App;
