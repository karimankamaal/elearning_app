import { inst1, inst2, inst3 } from '../assets2';
import { course1, prof1 , course2, prof2} from '../assets2';

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "mysessions",
    title: "My Sessions",
  },
  {
    id: "courses",
    title: "Courses",
  },
  {
    id: "teachers",
    title: "Teachers",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const instructors =[
    {
        name: "Ali Akram",
        course: "Mathematics",
        students: "2,500",
        rating: "4.8",
        img: inst1
    },

    {
        name: "Hassan Kamal",
        course: "Biology",
        students: "3,200",
        rating: "4.9",
        img:inst2
    },
    {
        name: "Ahmed Mohammed",
        course: "Computer Science",
        students: "1,900",
        rating: "4.7",
        img: inst3
    },
]

export const courses=[
  {
       img: course1,
       title: "Mathematics",
       students: "300",
       rating: "4.5",
       hours: "2 h",
       type: "Online",
       difficulty:"OL",
       profImage: prof1,
       prof: "Ali Akram",
       price: "250 EGP"
  },
  {
      img: course2,
      title: "Biology",
      students: "400",
      rating: "4.6",
      hours: "2 h",
      type: "Online",
      difficulty:"AS",
      profImage: prof2,
      prof: "Hassan Kamal",
      price: "300 EGP"
},
]

export const reservations = [
  {
    day: "9",
    availableTimes: ["7:00 PM", "8:00 PM", "9:00 PM"],
    unavailableTimes: ["6:00 PM"]
  },
  {
    day: "10",
    availableTimes: ["8:00 AM", "10:00 AM", "12:00 PM"],
    unavailableTimes: []
  },
  {
    day: "11",
    availableTimes: ["3:00 PM", "4:00 PM", "5:00 PM"],
    unavailableTimes: ["2:00 PM"]
  },
  {
    day: "12",
    availableTimes: ["9:00 AM", "11:00 AM"],
    unavailableTimes: ["10:00 AM", "1:00 PM"]
  },
  {
    day: "13",
    availableTimes: ["2:00 PM", "3:00 PM", "4:00 PM"],
    unavailableTimes: []
  },
  {
    day: "14",
    availableTimes: [],
    unavailableTimes: ["9:00 AM", "10:00 AM", "11:00 AM"]
  },
  {
    day: "15",
    availableTimes: ["6:00 PM"],
    unavailableTimes: ["7:00 PM", "8:00 PM", "9:00 PM"]
  }
];

