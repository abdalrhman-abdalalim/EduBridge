import { SlArrowRightCircle } from "react-icons/sl";
import { MdAlarmOn } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import "../../index.css";

interface IProps {
  courseName: string;
  courseRate: number;
  courseDepartment: string;
  courseDescription: string;
  courseImage: string;
  SalesNumber: number;
  priceBeforeDisc: number;
  price: number;
  courseDurationHr: number;
  courseDurationMin: number;
  lessons: number;
}

const CourseCard = ({
  courseName,
  courseRate,
  courseDepartment,
  courseDescription,
  courseImage,
  SalesNumber,
  courseDurationHr,
  courseDurationMin,
  lessons,
  price,
  priceBeforeDisc,
}: IProps) => {
  return (
    <div className="CourseCard">
      <div className="imgSection">
        <img src={courseImage} alt={courseImage} />
        <span>Sale</span>
      </div>
      <div className="CourseDetails">
        <div className="CourseDetailsHeader">
          <h5>{courseDepartment}</h5>
          <div className="CourseRate">
            <FaStar />
            {courseRate}
          </div>
        </div>
        <h4>{courseName}</h4>
        <p>{courseDescription}</p>
      </div>
      <div className="CourseInfo">
        <h5 className="SaleCourse">{SalesNumber} Sales</h5>
        <div className="CoursePrice">
          <h5 className="priceBefore">${priceBeforeDisc}</h5>
          <h5 className="priceAfter">${price}</h5>
        </div>
        <div className="CourseDuration">
          <div className="CourseTime">
            <MdAlarmOn size={20} />
            <h5>
              {courseDurationHr}hr {courseDurationMin}min
            </h5>
          </div>
          <div className="CourseLessons">
            <FaBookOpen />
            <h5>{lessons} Lessons</h5>
          </div>
        </div>
      <button>
        Learn More
        <SlArrowRightCircle size={18}/>
      </button>
      </div>
    </div>
  );
};

export default CourseCard;
