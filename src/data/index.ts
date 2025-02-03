import { IReviewCard } from './../interfaces/index';
import { ICards, ICourseCard } from "../interfaces";
import { CiMap } from "react-icons/ci";
import { FaCreditCard } from "react-icons/fa";
import { FaImages } from "react-icons/fa";

export const CardData: ICards[] = [
  {
    Logo: CiMap,
    title: "Books Library",
    color: "#e74040",
    bgColor: "#ffcdc1",
    description:
      "The gradual accumulation of information about atomic and small-scale behavior...",
  },
  {
    Logo: FaImages,
    title: "Market Analysis",
    color: "#2dc071",
    bgColor: "#b9eaa8",
    description:
      "The gradual accumulation of information about atomic and small-scale behavior...",
  },
  {
    Logo: FaCreditCard,
    title: "50+ online courses",
    color: "#23a6f0",
    bgColor: "#b2e3ff",
    description:
      "The gradual accumulation of information about atomic and small-scale behavior...",
  },
];

export const CoursesData: ICourseCard[] = [
  {
    courseDepartment: "Graphic Design",
    courseDescription:
      "Unlock your creativigy with your UI & UX coursel Learn essential design principles master industry-leading tools and create stunning visuals to bfing your ideas to life",
    courseDurationHr: 22,
    courseDurationMin: 30,
    courseImage:
      "https://sourcemediakw.com/wp-content/uploads/2023/04/UIUX.png",
    courseName: "UI/UX Design",
    courseRate: 4.7,
    lessons: 64,
    price: 4.99,
    priceBeforeDisc: 11.99,
    SalesNumber: 80,
  },
  {
    courseDepartment: "Software Development",
    courseDescription:
      "Transoform ideas into actionable plans with our project Design course! Learn to sturcture,organize and execute project effectively usint profeesional tools and techinques",
    courseDurationHr: 30,
    courseDurationMin: 30,
    courseImage:
      "https://blog-frontend.envato.com/cdn-cgi/image/width=2400,quality=75,format=auto/uploads/sites/2/2020/04/SOC091_FreeTutsCourses_WebDesign@2x.png",
    courseName: "Project Design",
    courseRate: 4.6,
    lessons: 121,
    price: 7.99,
    priceBeforeDisc: 15.99,
    SalesNumber: 160,
  },
  {
    courseDepartment: "Web development",
    courseDescription:
      "Build the fuoundation of web develpment with our HTML & CSS course! Learn to create stunning responseive websites from scratch with hands-on projects and practical skills.",
    courseDurationHr: 16,
    courseDurationMin: 40,
    courseImage:
      "https://wellcreator.com/blog/wp-content/uploads/2022/02/html-css-750x375.jpg",
    courseName: "HTML & CSS",
    courseRate: 4.9,
    lessons: 107,
    price: 8.99,
    priceBeforeDisc: 10.99,
    SalesNumber: 288,
  },
];



export const ReviewData: IReviewCard[] = [
  {
    StarsNumber: 5,
    Description:
      "The course exceeded my expectations! The content was well-organized , the explanations were clear, and the hands-on project helped me build real-world skills. Highly recommended it to anyone looking to lern!",
    InstructorImg:
      "https://www.ascm.org/globalassets/ascm_website_assets/img/2-5-how-do-i-apply-block.jpg",
    InstructorName: "Gamal Mahmoud",
    InstructorPosition: "Software Engineer",
  },
  {
    StarsNumber: 4,
    Description:
      "The course exceeded my expectations! The content was well-organized , the explanations were clear, and the hands-on project helped me build real-world skills. Highly recommended it to anyone looking to lern!",
    InstructorImg:
      "https://media.istockphoto.com/id/1072395722/photo/fitness-trainer-at-gym.jpg?s=612x612&w=0&k=20&c=3VBLCgbxG3bGNRp9Sc3tN_7G-g_DxXhGk9rhuZo-jkE=",
    InstructorName: "Omar Mohamed",
    InstructorPosition: "Developer",
  },
  {
    StarsNumber: 2,
    Description:
      "The course exceeded my expectations! The content was well-organized , the explanations were clear, and the hands-on project helped me build real-world skills. Highly recommended it to anyone looking to lern!",
    InstructorImg:
      "https://img.freepik.com/free-photo/unpleased-male-teacher-wearing-glasses-points-with-pointer-stick-blackboard-sitting-table-with-school-tools-classroom_141793-114329.jpg",
    InstructorName: "Islam Tarek",
    InstructorPosition: "Designer",
  },
];