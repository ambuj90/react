"use client";
import React, { useState } from "react";
import "../globals.css";

const FortuneCookieFinal = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [fortune, setFortune] = useState("No fortune");
  const [luckyNumbers, setLuckyNumbers] = useState(["?", "?", "?", "?", "?", "?"]);

  const fortuneList = [
    "Did you know that fortune cookies aren’t even Chinese? They’re made by Americans, based on a Japanese recipe.",
    "You have an ability to sense and know higher truth.",
    "Excellent time to become a missing person.",
    "Don’t look back, the lemmings are gaining on you.",
    "You look tired.",
    "Chess tonight.",
    "Don’t feed the bats tonight.",
    "Your boss is a few sandwiches short of a picnic.",
    "You will forget that you ever knew me.",
    "Future looks spotty. You will spill soup in late evening.",
    "You have the capacity to learn from mistakes. You’ll learn a lot today.",
    "A vivid and creative mind characterizes you.",
    "If you think last Tuesday was a drag, wait till you see what happens tomorrow!",
    "You will be attacked next Wednesday at 3:15 P.M. by six samurai sword wielding purple fish glued to Harley-Davidson motorcycles.",
    "There was a phone call for you.",
    "Are you making all this up as you go along?",
    "Don’t plan any hasty moves. You’ll be evicted soon anyway.",
    "Advancement in position.",
    "You’re ugly and your mother dresses you funny.",
    "Be careful! Is it classified?",
  ];

  const getFortune = () => {
    const randomFortune = fortuneList[Math.floor(Math.random() * fortuneList.length)];
    const numbers = Array.from({ length: 6 }, () => Math.floor(Math.random() * 99) + 1);
    setFortune(randomFortune);
    setLuckyNumbers(numbers);
  };

  const handleClick = () => {
    if (isOpened) {
      // Reset to closed state
      setIsOpened(false);
      getFortune();
    } else {
      // Open the cookie
      setIsOpened(true);
    }
  };

  return (
    <button
      className={`fc ${isOpened ? "opened" : "spawned"}`}
      type="button"
      onClick={handleClick}
    >
      <div className="fc-part left"></div>
      <div className="fc-part right"></div>
      <div className="fc-crumbs">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="fc-crumb"></div>
        ))}
      </div>
      <div className="fc-fortune">
        <p className="fc-fortune-text">{fortune}</p>
        <p className="fc-lucky-numbers">
          Lucky Numbers <span>{luckyNumbers.join(", ")}</span>
        </p>
      </div>
    </button>
  );
};

export default FortuneCookieFinal;
