import { IconType } from "react-icons";
import "../../index.css"

interface IProps {
  Logo: IconType;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

const Card = ({ description, Logo, bgColor, color, title }: IProps) => {
  return (
    <div className="card">
      <span
        style={{
          color: color,
          backgroundColor: bgColor,
        }}
      >
        <Logo size={24} className="LogoCard" />
      </span>
      <h3>{title}</h3>
      <hr />
      <p>{description}</p>
    </div>
  );
};

export default Card;
