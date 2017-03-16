import React from "react";
import { Link } from 'react-router'
import axios from 'axios';

export default class Homepage extends React.Component {

  constructor(props) {
    super(props);


    this.state = {
      quizNames: []
    };
  }




  render() {
    console.log("homepage");
    return (
      <div className="container homepage">
        <div className="row text-center hero-section">
          <h1>CrashCourse</h1>
          <i className="fa fa-desktop"></i>
        </div>
        <div className="row main-content">
          <div className="col-md-4 text-left">
            <h2>What is CrashCourse?</h2>
            <p>
              CrashCourse is a web app for creating and taking custom, timed quizzes.
              Test yourself or your friends on any subject matter you choose,
              but be sure to make a choice before the answer blocks crash to the ground!
            </p>
          </div>
          <div className="col-md-4 text-left">
            <h2>Why use CrashCourse?</h2>
            <p>
              CrashCourse is fun and easy to use.
              The timer, animation, and sound-effect features push the quiz taker to
              answer as quickly as possible, training your brain to think quickly!
            </p>
          </div>
          <div className="col-md-4 text-left">
            <h2>Get started</h2>
            <p>
              Creating a quiz is incredibly easy!
              Click on Create Quiz tab, enter the name or subject of your quiz,
              and then fill in the question and answers in the fields. To add more questions,
              be sure to type in the same quiz name.
            </p>
            <Link to="/customQuiz">Create a quiz now!</Link>
          </div>
        </div>




      </div>
    );
  }
}
