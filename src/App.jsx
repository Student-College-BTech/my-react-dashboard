import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Cards from "./components/Cards";
import Charts from "./components/Charts";
import "./App.css";

function App() {

  const [theme, setTheme] = useState("light");

  return (
    <div className={`app ${theme}`}>
      
      <Sidebar />

      <div className="main">
        <Topbar theme={theme} setTheme={setTheme} />

        <div className="content">
          <h2>Dashboard</h2>
          <Cards />
          <Charts />
        </div>
      </div>

    </div>
  );
}

export default App;