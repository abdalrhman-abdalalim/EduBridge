import { useState, useEffect } from "react";
import "../App.css";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [menuOpen, setMenuOpen] = useState(false); // State to track dropdown visibility

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
      setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AnimatePresence mode="popLayout">
      <motion.header>
        <motion.nav
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>EduBridge</h2>

          {!isMobile && (
            <ul className="nav-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#Product">Product</a>
              </li>
              <li>
                <a href="#Pricing">Pricing</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          )}

          <div>
            <button className="LoginBtn">Login</button>
            <button className="JoinBtn">
              JOIN US <FaArrowRight />
            </button>
          </div>

          {/* ✅ Mobile Menu Icon */}
          {isMobile && (
            <div className="Mobile-menu">
              {menuOpen && (
                <motion.ul
                  className="dropdown-menu"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0.3,
                      ease: "easeInOut"
                    },
                    scale:0
                  }}
                >
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#Product">Product</a>
                  </li>
                  <li>
                    <a href="#Pricing">Pricing</a>
                  </li>
                  <li>
                    <a href="#Contact">Contact</a>
                  </li>
                </motion.ul>
              )}

              <TiThMenu
                className="menu-icon"
                onClick={() => setMenuOpen(!menuOpen)}
              />
            </div>
          )}
        </motion.nav>
      </motion.header>
    </AnimatePresence>
  );
};

export default Header;
