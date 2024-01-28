import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAllQuestions } from "./actions/question";
import Navbar from "./components/Navbar/navbar";
import AllRoutes from "./AllRoutes";
import "./App.css";
import { fetchAllUsers } from "./actions/user";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers())
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
