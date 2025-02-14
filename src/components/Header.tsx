import "../App.css";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.header>
        <motion.nav
          initial={{
            scale: 0.5,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration:0.5
          }}
        >
          <h2>EduBridge</h2>

          <ul>
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

          <div>
            <button className="LoginBtn">Lgoin</button>
            <button className="JoinBtn">
              JOIN US <FaArrowRight />
            </button>
          </div>
        </motion.nav>
      </motion.header>
    </AnimatePresence>
  );
};

export default Header;
