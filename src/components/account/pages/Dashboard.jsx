/**
*!/usr/bin/env node
* -*- coding: utf-8 -*-
* DizzyCalc
*/


/**
* author: OTechCup
* copyright: &copy; 2024 - new Date().getFullYear() All Rights Reserved | Exfac
* credits: ["Mr. O"]
* version: Beta v0.1.0
* maintainer: OTechCup
* email: support@exfac.info
*/


// import modules
import { useState } from "react";


function Dashboard() {
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


  function calculate() {
    try {
      setValue(eval(value));  // Using eval is not recommended for production code due to security risks.
    } catch (error) {
      setValue("Error");
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
          00:00:00
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
