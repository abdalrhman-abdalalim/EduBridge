import { IconType } from "react-icons";


export interface ICards {
  Logo: IconType;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

export interface ICourseCard {
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


export interface IReviewCard {
  StarsNumber: number;
  Description: string;
  InstructorImg: string;
  InstructorName: string;
  InstructorPosition: string;
}