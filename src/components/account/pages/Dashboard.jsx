/**
*!/usr/bin/env node
* -*- coding: utf-8 -*-
* DizzyCalc
*/


/**
* author: OTechCup
* copyright: &copy; 2024 - new Date().getFullYear() All Rights Reserved | Exfac
* credits: ["Mr. O", "kenkszii", "Bridget"]
* version: Beta v0.1.0
* maintainer: OTechCup
* email: support@exfac.info
*/


// import modules
import { useState, useRef } from "react";
import { evaluate } from "mathjs";

import "../../../static/assets/scss/account/pages/Dashboard.scss";


function Dashboard() {
  const [value, setValue] = useState("");
  const [level, setLevel] = useState(1);
  const [tries, setTries] = useState(20);
  const [reward, setReward] = useState(0);
  const [intent, setIntent] = useState("");
  const [timer, setTimer] = useState("00:05:00");
  const timerIntervalRef = useRef(null);
  const [mapping, setMapping] = useState(null);
  const [isRandom, setIsRandom] = useState(false);


  function randomArray(array) {
    return array.sort(() => Math.random() - 0.5);
  };


  function generateMapping() {
    const digits = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      ".",
    ];
    const operations = ["+", "-", "*", "/"];
    const actionButton = ["clear", "backspace", "equality"];
    const randomDigits = randomArray(digits);
    const randomOperations = randomArray(operations);
    const randomActionButton = randomArray(actionButton);

    return {
      1: randomDigits[1],
      2: randomDigits[2],
      3: randomDigits[3],
      4: randomDigits[4],
      5: randomDigits[5],
      6: randomDigits[6],
      7: randomDigits[7],
      8: randomDigits[8],
      9: randomDigits[9],
      0: randomDigits[0],
      ".": randomDigits[10],
      "+": randomOperations[0],
      "-": randomOperations[1],
      "*": randomOperations[2],
      "/": randomOperations[3],
      clear: randomActionButton[0],
      equality: randomActionButton[1],
      backspace: randomActionButton[2],
    };
  };


  function handleClick(digitOrOperation) {
    const mappedValue = (
      isRandom
        ? mapping[digitOrOperation] || digitOrOperation
        : digitOrOperation
    );

    if (mappedValue === "clear") {
      clear();
    } else if (mappedValue === "backspace") {
      backspace();
    } else if (mappedValue === "equality") {
      calculate();
    } else {
      setValue(value + mappedValue);

      if (intent){
        if (value.includes(mappedValue)) {
          setReward(reward + 0.010);
        } else {
          setTries(tries - 1);
          setReward(reward - 0.050);
        };
      };
    };
  };


  function clear() {
    setValue("");
  };

  
  function backspace() {
    setValue(value.slice(0, -1));
  };


  function calculate(element) {
    if (!intent && !isRandom && value) {
      setIntent(value);
      clear();
      startTimer();
      setMapping(generateMapping());
      setIsRandom(true);

      element.target.innerHTML = "<i>=</i>";
    } else if (value) {
      try {
        setValue(evaluate(value).toString());
        setMapping(generateMapping());
      } catch (error) {
        setValue("Error");
        setMapping(generateMapping());
      };
    };
  };


  function stopTimer() {
    clearInterval(timerIntervalRef.current);
  };


  function startTimer() {
    const [hours, minutes, seconds] = timer.split(":").map(Number);

    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    timerIntervalRef.current = setInterval(
      function () {
        if (totalSeconds <= 0) {
          stopTimer();

          return;
        };

        totalSeconds -= 1;
        
        const h = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
        const m = (
          String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0")
        );
        const s = String(totalSeconds % 60).padStart(2, "0");

        setTimer(`${h}:${m}:${s}`);
      },
      1000,
    );
  };


  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <img
            src="/static/assets/imgs/favicon/android-chrome-512x512.png"
            alt="dizzycalc-icon"
            style={{ width: "50px" }}
          />

          <span className="text-magenta-rose">
            D
          </span>
          
          <span className="text-blue">
            i
          </span>
          
          <span className="text-orange">
            z
          </span>
          
          <span className="text-lime-green">
            z
          </span>
          
          <span className="text-magenta-rose">
            y
          </span>
          
          <span className="text-blue">
            C
          </span>
          
          <span className="text-orange">
            a
          </span>
          
          <span className="text-lime-green">
            l
          </span>
          
          <span className="text-magenta-rose">
            c
          </span>
        </div>

        <div className="timer">
          {timer}
        </div>
      </div>

      <form 
        name="calc" 
        className="calculator" 
        onSubmit={
          function (e) { 
            e.preventDefault();
          }
        }
      >
        <div className="status-bar">
          <p>
            LEVEL: {level}
          </p>

          <p>
            TRIES: {tries}
          </p>

          <p>
            REWARD: {reward.toFixed(3)}p
          </p>
        </div>

        <input 
          type="text" 
          className="value" 
          readOnly
          value={value}
          name="txt"
        />

        <p className="intent-prompt">
          

          {
            intent
              ? `Intent: ${intent}`
              : "What's your intent?"
          }
          

        </p>
        
        <span 
          className="clear" 
          onClick={clear}
        >
          <i>
            C
          </i>
        </span>
        
        <span 
          className="operator" 
          onClick={
            function () {
              handleClick("/");
            }
          }
        >
          <i>
            /
          </i>
        </span>
        
        <span 
          className="operator" 
          onClick={
            function () {
              handleClick("*");
            }
          }
        >
          <i>
            *
          </i>
        </span>

        <span 
          className="action" 
          onClick={backspace}
        >
          <i>
            ←
          </i>
        </span>
        
        <span 
          onClick={
            function () {
              handleClick("7");
            }
          }
        >
          <i>
            7
          </i>
        </span>
        
        <span 
          onClick={
            function () {
              handleClick("8");
            }
          }
        >
          <i>
            8
          </i>
        </span>
        
        <span 
          onClick={
            function () {
              handleClick("9");
            }
          }
        >
          <i>
            9
          </i>
        </span>
        
        <span 
          className="operator"
          onClick={
            function () {
              handleClick("-");
            }
          }
        >
          <i>
            -
          </i>
        </span>
        
        <span 
          onClick={
            function () {
              handleClick("4");
            }
          }
        >
          <i>
            4
          </i>
        </span>
        
        <span 
          onClick={
            function () {
              handleClick("5");
            }
          }
        >
          <i>
            5
          </i>
        </span>
        
        <span 
          onClick={
            function () {
              handleClick("6");
            }
          }
        >
          <i>
            6
          </i>
        </span>
        
        <span 
          className="plus operator" 
          onClick={
            function () {
              handleClick("+");
            }
          }
        >
          <i>
            +
          </i>
        </span>
        
        <span 
          onClick={
            function () {
              handleClick("1");
            }
          }
        >
          <i>
            1
          </i>
        </span>
        
        <span 
          onClick={
            function () {
              handleClick("2");
            }
          }
        >
          <i>
            2
          </i>
        </span>

        <span 
          onClick={
            function () {
              handleClick("3");
            }
          }
        >
          <i>
            3
          </i>
        </span>
        
        <span 
          className="action" 
          onClick={
            function () {
              handleClick("Coming soon...");
            }
          }
        >
          <i>
            Menu
          </i>
        </span>
        
        <span 
          onClick={
            function () {
              handleClick("0");
            }
          }
        >
          <i>
            0
          </i>
        </span>
        
        <span 
          onClick={
            function () {
              handleClick(".");
            }
          }
        >
          <i>
            .
          </i>
        </span>
        
        <span 
          className="equal" 
          onClick={calculate}
        >
          <i>
            GO
          </i>
        </span>
      </form>
    </div>
  );
};


export default Dashboard;
