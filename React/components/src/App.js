import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import SideBar from "./pages/sideBar/sideBar.components";
import { createRoot } from "react-dom/client";
import { openNav } from "./util/navigationSlice";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store/store";
import { Content } from "./pages/content/Content.component";
import { Modal } from "./components/Modal/Modal.component";
import { DateCounter } from "./components/ReactCourseChallenges/DateCounter/DateCounter.component";
import FlashCardsComponent from "./components/ReactCourseChallenges/FlashCards/FlashCards.component";
import FlashCards from "./components/ReactCourseChallenges/FlashCards/FlashCards.component";
import { Accordion } from "./components/ReactCourseChallenges/Accordion/Accordion.component";
import RaitingBar from "./components/RatingBar/RatingBar.component";
import { StepsBar } from "./components/ProgressBar/StepsBar.component";

const App = () => {
  const dispatch = useDispatch();
  const { openNavigation } = useSelector((state) => state.navigation);
  const { open } = useSelector((state) => state.modal);

  const handleOpen = () => {
    dispatch(openNav());
  };

  const faqs = [
    {
      title: "Where are these chairs assembled?",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    },
    {
      title: "How long do I have to return my chair?",
      text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
    },
    {
      title: "Do you ship to countries outside the EU?",
      text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    },
  ];

  return (
    <div className="container">
      <SideBar openNav={openNavigation} onClick={handleOpen} />
      <Content openNav={openNavigation} />
      <Modal open={open} tittle="Exapand Cards">
        <img src="img/expandable cards.gif" className="component-gif"></img>
        <p>Some Description</p>
        <RaitingBar maxRating={5} />
        <StepsBar steps={[1, 2, 3, 4, 5, 6, 8, 11]} />
      </Modal>
    </div>
  );
};

export default App;
