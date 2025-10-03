import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapperRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Helper: close menu after clicking a link
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header ref={wrapperRef}>
      <h2 className="logo">Designersview</h2>

      {/* Nav links */}
      <nav className="navbar">
        <ul className={menuOpen ? "active" : ""}>
          <li>
            <Link to="/body" onClick={handleLinkClick}>
              Home <HomeIcon className="iconss" />
            </Link>
          </li>
          <li>
            <Link to="/project" onClick={handleLinkClick}>
              Project <AssignmentIcon className="iconss" />
            </Link>
          </li>
          <li>
            <Link to="/aboutMe" onClick={handleLinkClick}>
              About Me <InfoIcon className="iconss" />
            </Link>
          </li>
          <li>
            <Link to="/callMe" onClick={handleLinkClick}>
              Call Me <CallIcon className="iconss" />
            </Link>
          </li>
          <li>
            <Link to="/certification" onClick={handleLinkClick}>
              Certification <AssignmentIcon className="iconss" />
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile menu button */}
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        Menu
      </button>
    </header>
  );
}

export default Header;
