import "../App.css"
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <nav>
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
      </nav>
    </header>
  );
};

export default Header;
