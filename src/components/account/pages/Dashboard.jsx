/**
*!/usr/bin/env node
* -*- coding: utf-8 -*-
* DizzyCalc
*/


/**
* author: OTechCup
* copyright: &copy; 2024 - new Date().getFullYear() All Rights Reserved | Exfac
* credits: ["Mr. O, kenkszii"]
* version: Beta v0.1.0
* maintainer: OTechCup
* email: support@exfac.info
*/


// import modules
import React, { useState, useEffect } from 'react';

import "../../../static/assets/scss/account/pages/Dashboard.scss";


function Dashboard( { initialMinutes = 1, initialSeconds = 0 }) {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive && (minutes > 0 || seconds > 0)) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes > 0) {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  function startTimer () {
    setIsActive(true);
  };


  // function resetTimer () {
  //   setMinutes(initialMinutes);
  //   setSeconds(initialSeconds);  // reset timer function.
  //   setIsActive(false);
  // };

  const [value, setValue] = useState("");
  const [level, setLevel] = useState(1);
  const [tries, setTries] = useState(20);
  const [reward, setReward] = useState(0);
  const [intent, setIntent] = useState("");


  function handleClick(val) {
    setValue(value + val);
  };


  function clear() {
    setValue("");
  };

  function handlDoubleClick () {
    startTimer();
    calculate();
    
  };


  function calculate(element) {
    if (!intent && value) {
      setIntent(value);
      clear();

      element.target.innerHTML = "<i>=</i>";
    } else if (value) {
      try {
        setValue(eval(value));  // Using eval is not recommended for production code due to security risks.
      } catch (error) {
        setValue("Error");
      };
    };
  };


  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <p style={{ marginRight: '10px' }}>DC</p>

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
        <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
        <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
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
          onClick={clear}
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
              handleClick("");
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
          onClick= {handlDoubleClick}
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