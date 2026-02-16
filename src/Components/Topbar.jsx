import { FaSearch, FaSun, FaMoon } from "react-icons/fa";

const Topbar = ({ theme, setTheme }) => {

  const toggleTheme = () => {
    theme === "light"
      ? setTheme("dark")
      : setTheme("light");
  };

  return (
    <div className="topbar">

      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <FaSearch className="search-icon" />
      </div>

      <div className="right-section">

        {/* 🌞🌙 Toggle Button */}
        <div className="theme-toggle" onClick={toggleTheme}>
          {theme === "light"
            ? <FaMoon />
            : <FaSun />}
        </div>

        <div className="profile">
          <span>Gayatri</span>
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="profile" />
        </div>

      </div>

    </div>
  );
};

export default Topbar;
