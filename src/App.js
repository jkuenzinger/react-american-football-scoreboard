//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
let [homeCount, sethomeCount] = useState(0);
let [awayCount, setawayCount] = useState(0);

const homeScore = (event) => {
  sethomeCount(homeCount + 7)
}

const awayScore = (event) => {
  setawayCount(awayCount + 7)
}

const homeGoal = (event) => {
  sethomeCount(homeCount + 3)
}

const awayGoal = (event) => {
  setawayCount(awayCount +3)
}

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeCount}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayCount}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={homeScore}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={homeGoal}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={awayScore}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={awayGoal}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
