import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { motion } from "framer-motion"; // Import Framer Motion
import "../../index.css";

interface IProps {
  StarsNumber: number;
  Description: string;
  InstructorImg: string;
  InstructorName: string;
  InstructorPosition: string;
}

const ReviewCard = ({
  Description,
  InstructorImg,
  InstructorName,
  InstructorPosition,
  StarsNumber,
}: IProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Animate to this state
      transition={{ duration: 0.5, ease: "easeOut" }} // Animation duration and easing
      whileHover={{ scale: 1.05 }} // Scale up on hover
      whileTap={{ scale: 0.95 }} // Scale down on tap
    >
      {/* Stars */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {Array.from({ length: 5 }).map((_, index) =>
          index < StarsNumber ? (
            <FaStar
              key={index}
              style={{
                fill: index < StarsNumber ? "yellow" : "white",
                stroke: "black",
                strokeWidth: "2px",
                width: "20px",
                height: "20px",
              }}
            />
          ) : (
            <CiStar
              key={index}
              style={{
                stroke: "yellow",
                strokeWidth: "1px",
                width: "20px",
                height: "20px",
              }}
            />
          )
        )}
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {Description}
      </motion.p>

      {/* Instructor Info */}
      <motion.div
        className="instructor"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <motion.img
          src={InstructorImg}
          alt={InstructorImg}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        />
        <motion.div
          className="InstructorInfo"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <h4>{InstructorName}</h4>
          <h4>{InstructorPosition}</h4>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ReviewCard;