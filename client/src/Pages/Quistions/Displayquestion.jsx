import React from "react";
import LeftSidebar from "../../components/Leftsidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/Rightbar";
import QuestionDetails from "./QuestionDetails";

const Displayquestion = () => {
  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <QuestionDetails/>
        <RightSidebar />
      </div>
    </div>
  );
};

export default Displayquestion;
