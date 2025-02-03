import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
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
    <div>
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

      <p>{Description}</p>
      <div className="instructor">
        <img src={InstructorImg} alt={InstructorImg} />
        <div className="InstructorInfo">
          <h4>{InstructorName}</h4>
          <h4>{InstructorPosition}</h4>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
