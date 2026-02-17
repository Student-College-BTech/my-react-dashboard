import { FaTachometerAlt, FaUser, FaCar, FaUsers } from "react-icons/fa";

const Sidebar = ({ setActiveTab }) => {
  return (
    <div className="sidebar">
      <h2>BRAND</h2>
      <ul>
        <li onClick={() => setActiveTab("dashboard")}>
          <FaTachometerAlt /> Dashboard
        </li>
        <li onClick={() => setActiveTab("vehicles")}>
          <FaCar /> Vehicles
        </li>
        <li onClick={() => setActiveTab("customers")}>
          <FaUsers /> Customers
        </li>
        <li onClick={() => setActiveTab("staff")}>
          <FaUser /> Staff
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
