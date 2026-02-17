import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar"; 
import Cards from "./Components/Cards";
import Charts from "./Components/Charts";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "vehicles":
        return (
          <div className="table-section">
            <h2>Vehicles</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Model</th>
                  <th>Type</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Honda City</td>
                  <td>Sedan</td>
                  <td>Available</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Hyundai Creta</td>
                  <td>SUV</td>
                  <td>Rented</td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      case "customers":
        return (
          <div className="table-section">
            <h2>Customers</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>101</td>
                  <td>Rahul Sharma</td>
                  <td>9876543210</td>
                  <td>Hyderabad</td>
                </tr>
                <tr>
                  <td>102</td>
                  <td>Anita Reddy</td>
                  <td>9123456789</td>
                  <td>Bangalore</td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      case "staff":
        return (
          <div className="table-section">
            <h2>Staff</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Shift</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>S01</td>
                  <td>Ramesh</td>
                  <td>Manager</td>
                  <td>Morning</td>
                </tr>
                <tr>
                  <td>S02</td>
                  <td>Priya</td>
                  <td>Driver</td>
                  <td>Evening</td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      default:
        return (
          <>
            <h2>Dashboard</h2>
            <Cards />
            <Charts />
          </>
        );
    }
  };

  return (
    <div className={`app ${theme}`}>
      <Sidebar setActiveTab={setActiveTab} />

      <div className="main">
        <Topbar theme={theme} setTheme={setTheme} />

        <div className="content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;
