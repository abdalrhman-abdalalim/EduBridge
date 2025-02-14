import { motion } from "framer-motion";
import { CardData, CoursesData, ReviewData } from "../data";
import Card from "./ui/Card";
import CourseCard from "./ui/CourseCard";
import ReviewCard from "./ui/ReviewCard";

const Main = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  // Individual card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <main>
      <motion.div
        className="home"
        variants={{
          hidden: { y: -100, opacity: 0.4 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { stiffness: 300, staggerChildren: 0.3, duration: 0.7 },
          },
        }}
        initial="hidden"
        whileInView="visible"
      >
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 3,
          }}
          whileInView={{
            y: 0,
          }}
        >
          <h4>Join Us</h4>
          <h1>Best Learning Opportunities</h1>
          <p>
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </p>
          <div className="HomeBtnSection">
            <button className="QuoteBtn"> Get Quote Now</button>
            <button className="LearnBtn">Learn More</button>
          </div>
          <motion.div className="CardDiv">
            {CardData.map(
              ({ bgColor, color, description, Logo, title }, index) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card
                    bgColor={bgColor}
                    color={color}
                    description={description}
                    Logo={Logo}
                    title={title}
                    key={index}
                  />
                </motion.div>
              )
            )}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="CoursesDiv"
        variants={{
          hidden: { x: -100 },
          visible: {
            x: 0,
            transition: {
              duration: 1,
              type: "spring",
              stiffness: 400,
              damping: 15,
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
      >
        <h6>Practice Advice</h6>
        <h1>Make Online education acessible</h1>
        <p>
          Ecucationis the most pwerful tool to unlock potential, ignite
          curiosity, and shape a brigher future. At our platform we beilive in
          making learning accessible , engaging and transformative, empowe3ring
          studient to acheive their dreams and build the skills they need for
          success in an ever-chaning world.
        </p>
        <motion.div
          className="CoursesContainer"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {CoursesData.map((course, index) => (
            <motion.div
              key={index}
              initial={{
                x: -100,
              }}
              animate={{
                x: 0,
              }}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 15,
                duration: 1,
                staggerChildren: 0.3,
              }}
            >
              <CourseCard {...course} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="reviewsSection"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        <motion.h6
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Practice Advice
        </motion.h6>

        <motion.h1
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Make Online Education Accessible
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Discover what our students are saying in the Reviews section. Real
          feedback from learners who have benefited from our courses.
        </motion.p>

        <motion.div className="ReviewContainer">
          {ReviewData.map((ele, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <ReviewCard {...ele} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="JoinSection"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        {/* Small Title */}
        <motion.h6
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Practice Advice
        </motion.h6>

        {/* Main Heading */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          JOIN US
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Have questions or need assistance? Reach out to us through our team.
          We are here to help and ensure you have the best experience possible!
        </motion.p>

        {/* Input Field */}
        <motion.input
          type="email"
          placeholder="Your Email"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />

        {/* Subscribe Button */}
        <motion.button
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Subscribe
        </motion.button>
      </motion.div>
    </main>
  );
};

export default Main;
