import { CardData, CoursesData, ReviewData } from "../data";
import Card from "./ui/Card";
import CourseCard from "./ui/CourseCard";
import ReviewCard from "./ui/ReviewCard";

const Main = () => {
  return (
    <main>
      <div className="home">
        <div>
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
          <div className="CardDiv">
            {CardData.map(
              ({ bgColor, color, description, Logo, title }, index) => (
                <Card
                  bgColor={bgColor}
                  color={color}
                  description={description}
                  Logo={Logo}
                  title={title}
                  key={index}
                />
              )
            )}
          </div>
        </div>
      </div>

      <div className="CoursesDiv">
        <h6>Practice Advice</h6>
        <h1>Make Online education acessible</h1>
        <p>
          Ecucationis the most pwerful tool to unlock potential, ignite
          curiosity, and shape a brigher future. At our platform we beilive in
          making learning accessible , engaging and transformative, empowe3ring
          studient to acheive their dreams and build the skills they need for
          success in an ever-chaning world.
        </p>
        <div className="CoursesContainer">
          {CoursesData.map(
            (
              {
                SalesNumber,
                courseDepartment,
                courseDescription,
                courseDurationHr,
                courseDurationMin,
                courseImage,
                courseName,
                courseRate,
                lessons,
                price,
                priceBeforeDisc,
              },
              index
            ) => (
              <CourseCard
                key={index}
                SalesNumber={SalesNumber}
                courseDepartment={courseDepartment}
                courseDescription={courseDescription}
                courseDurationHr={courseDurationHr}
                courseDurationMin={courseDurationMin}
                courseImage={courseImage}
                courseName={courseName}
                courseRate={courseRate}
                lessons={lessons}
                price={price}
                priceBeforeDisc={priceBeforeDisc}
              />
            )
          )}
        </div>
      </div>

      <div className="reviewsSection">
        <h6>Practice Advice</h6>
        <h1>Make Online education acessible</h1>
        <p>
          Discover what our student are saying in the Reviews sectional Real
          feedback from learner who have experienced adn benefited from our
          courses.
        </p>
        <div className="ReviewContainer">
          {ReviewData.map((ele, index) => (
            <ReviewCard
              key={index}
              Description={ele.Description}
              InstructorImg={ele.InstructorImg}
              InstructorName={ele.InstructorName}
              InstructorPosition={ele.InstructorPosition}
              StarsNumber={ele.StarsNumber}
            />
          ))}
        </div>
      </div>

      <div className="JoinSection">
        <h6>Practice Advice</h6>
        <h1>JOIN US</h1>
        <p>Have questions or need assistance? Reach out to us through our team we are here to help an ensuer you have the best experience possible!</p>
        <input type="email" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </main>
  );
};

export default Main;
