import { FaTachometerAlt, FaUser } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>BRAND</h2>
      <ul>
        <li><FaTachometerAlt /> Dashboard</li>
        <li><FaUser /> Profile</li>
      </ul>
    </div>
  );
};

export default Sidebar;
