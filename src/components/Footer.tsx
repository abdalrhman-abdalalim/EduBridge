import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "../index.css";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { staggerChildren: 0.3, duration: 1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const iconVariants = {
  hover: { scale: 1.2, transition: { duration: 0.3 } },
};

const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
    >
      <motion.div className="FSectoins" variants={containerVariants}>
        {/* Get In Touch Section */}
        <motion.div className="Touch" variants={itemVariants}>
          <h2>Get In Touch</h2>
          <h5>Lorem ipsum dolor sit amet</h5>
          <div className="Social">
            <motion.div variants={iconVariants} whileHover="hover">
              <FaFacebook />
            </motion.div>
            <motion.div variants={iconVariants} whileHover="hover">
              <FaInstagram />
            </motion.div>
            <motion.div variants={iconVariants} whileHover="hover">
              <FaTwitter />
            </motion.div>
          </div>
        </motion.div>

        {/* Company Info */}
        <motion.div className="CompanyInfo" variants={itemVariants}>
          <h2>Company Info</h2>
          <ul>
            <motion.li variants={itemVariants}>
              <a href="#">About Us</a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a href="#">Career</a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a href="#">We are hiring</a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a href="#">Blog</a>
            </motion.li>
          </ul>
        </motion.div>

        {/* Features Section */}
        <motion.div className="Features" variants={itemVariants}>
          <h2>Features</h2>
          <ul>
            <motion.li variants={itemVariants}>
              <a href="#">Business Marketing</a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a href="#">User Analytic</a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a href="#">Live Chat</a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a href="#">Unlimited Support</a>
            </motion.li>
          </ul>
        </motion.div>

        {/* Resources Section */}
        <motion.div className="Features" variants={itemVariants}>
          <h2>Resources</h2>
          <ul>
            <motion.li variants={itemVariants}>
              <a href="#">IOS & Android</a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a href="#">Watch a Demo</a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a href="#">Customers</a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a href="#">API</a>
            </motion.li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Footer Text */}
      <motion.p variants={itemVariants}>
        @ 2025 | all rights reserved made by <span>Abdalrhamn Aboalela</span>
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
