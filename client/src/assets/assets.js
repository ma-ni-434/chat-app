import logo from "./logo.png";
import bg from "./bg.jpg";
import menu from "./menu.png";
import search from "./search.png";
import avatar from "./avatar.png";
import pic1 from "./pic1.png";
import pic2 from "./pic2.png";
import pic3 from "./pic3.png";
import pic4 from "./pic4.png";
import pic5 from "./pic5.png";
import arrow from "./arrow.png";
import help from "./help.png";
import gallery from "./gallery.png";
import send from "./send.png";
import cat1 from "./cat1.jpg";
import cat2 from "./cat2.jpg";
import cat3 from "./cat3.jpg";
import cat4 from "./cat4.jpg";
import cat5 from "./cat5.jpg";

const assets = {
  gallery,
  send,
  logo,
  help,
  arrow,
  bg,
  menu,
  search,
  avatar,
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  cat1,
  cat2,
  cat3,
  cat4,
  cat5,
};

export default assets;

export const imagesDummyData = [cat1, cat2, cat3, cat4, cat5];

export const userDummyData = [
  {
    _id: "680f50aaf10f3cd28382ecf2",
    email: "test1@greatstack.dev",
    fullName: "Alison Martin",
    profilePic: pic1,
    bio: "Hi Everyone, I am Using ChatBuddy!",
  },
  {
    _id: "680f50aaf10f3cd28382ecf3",
    email: "test2@greatstack.dev",
    fullName: "Brian Cooper",
    profilePic: pic2,
    bio: "Hey there! Excited to connect with new people.",
  },
  {
    _id: "680f50aaf10f3cd28382ecf4",
    email: "test3@greatstack.dev",
    fullName: "Catherine Lee",
    profilePic: pic3,
    bio: "Coffee lover ☕ | Tech enthusiast 💻",
  },
  {
    _id: "680f50aaf10f3cd28382ecf5",
    email: "test4@greatstack.dev",
    fullName: "David Smith",
    profilePic: pic4,
    bio: "Always learning, always growing 🚀",
  },
  {
    _id: "680f50aaf10f3cd28382ecf6",
    email: "test5@greatstack.dev",
    fullName: "Emma Johnson",
    profilePic: pic5,
    bio: "Love making friends and sharing ideas 🌍",
  },
];

export const messageDummyData = [
  {
    _id: "680f571ff10f3cd28382f094",
    senderId: "680f50aaf10f3cd28382ecf2",
    receiverId: "680f50aaf10f3cd28382ecf3",
    text: "Hey Brian! How are you doing today?",
    seen: true,
    image: assets.pic2,
    createdAt: "2025-04-30T09:45:52.634Z",
  },
  {
    _id: "680f571ff10f3cd28382f094",
    senderId: "680f50aaf10f3cd28382ecf2",
    receiverId: "680f50aaf10f3cd28382ecf3",
    text: "Hey Brian! How are you doing today?",
    seen: true,
    image: assets.pic2,
    createdAt: "2025-04-30T09:45:52.634Z",
  },
  {
    _id: "680f571ff10f3cd28382f094",
    senderId: "680f50aaf10f3cd28382ecf2",
    receiverId: "680f50aaf10f3cd28382ecf3",
    text: "Hey Brian! How are you doing today?",
    seen: true,
    image: assets.pic2,
    createdAt: "2025-04-30T09:45:52.634Z",
  },
  //   {
  //     _id: "680f5720f10f3cd28382f095",
  //     senderId: "680f50aaf10f3cd28382ecf3",
  //     receiverId: "680f50aaf10f3cd28382ecf2",
  //     text: "Hi Alison! I'm good, just working on some projects.",
  //     seen: true,
  //     createdAt: "2025-04-28T10:25:11.412Z",
  //   },
  //   {
  //     _id: "680f5721f10f3cd28382f096",
  //     senderId: "680f50aaf10f3cd28382ecf4",
  //     receiverId: "680f50aaf10f3cd28382ecf5",
  //     text: "Hey Emma, are you free this weekend?",
  //     seen: false,
  //     createdAt: "2025-04-29T14:05:43.221Z",
  //   },
  //   {
  //     _id: "680f5722f10f3cd28382f097",
  //     senderId: "680f50aaf10f3cd28382ecf5",
  //     receiverId: "680f50aaf10f3cd28382ecf4",
  //     text: "Yes David, let’s plan something fun!",
  //     seen: true,
  //     createdAt: "2025-04-29T14:07:18.992Z",
  //   },
  {
    _id: "680f5723f10f3cd28382f098",
    senderId: "680f50aaf10f3cd28382ecf6",
    receiverId: "680f50aaf10f3cd28382ecf2",
    text: "Alison, could you help me with the new ChatBuddy update?",
    seen: false,
    image: assets.logo,
    createdAt: "2025-04-28T10:23:27.844Z",
  },
  {
    _id: "680f5723f10f3cd28382f098",
    senderId: "680f50aaf10f3cd28382ecf6",
    receiverId: "680f50aaf10f3cd28382ecf2",
    text: "Alison, could you help me with the new ChatBuddy update?",
    seen: false,
    createdAt: "2025-04-28T10:23:27.844Z",
  },
];
