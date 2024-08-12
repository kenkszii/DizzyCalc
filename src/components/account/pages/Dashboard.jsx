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

  function handleClick(digits) {
    let newDigits;
    switch (digits) {
      case "1":
        newDigits = "4";
        break;
      case "2":
        newDigits = "7";
        break;
      case "3":
        newDigits = "8";
        break;
      case "4":
        newDigits = "9";
        break;
      case "5":
        newDigits = "3";
        break;
      case "6":
        newDigits = "2";
        break;
      case "7":
        newDigits = "1";
        break;
      case "8":
        newDigits = "6";
        break;
      case "9":
        newDigits = "5";
        break;
      default:
        newDigits = digits;
    }
    setValue(value + newDigits);
  }

  function clear() {
    setValue("");
  }

  function calculate() {
    try {
      setValue(eval(value)); // Using eval is not recommended for production code due to security risks.
    } catch (error) {
      setValue("Error");
    }
  }

  return (
    <div className="container">
      <form
        name="calc"
        className="calculator"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="value"
          readOnly
          value={value}
          name="txt"
        />

        <span className="num clear" onClick={clear}>
          <i>C</i>
        </span>

        <span className="num" onClick={() => handleClick("/")}>
          <i>/</i>
        </span>

        <span className="num" onClick={() => handleClick("*")}>
          <i>*</i>
        </span>

        <span className="num" onClick={() => handleClick("7")}>
          <i>7</i>
        </span>

        <span className="num" onClick={() => handleClick("8")}>
          <i>8</i>
        </span>

        <span className="num" onClick={() => handleClick("9")}>
          <i>9</i>
        </span>

        <span className="num" onClick={() => handleClick("-")}>
          <i>-</i>
        </span>

        <span className="num" onClick={() => handleClick("4")}>
          <i>4</i>
        </span>

        <span className="num" onClick={() => handleClick("5")}>
          <i>5</i>
        </span>

        <span className="num" onClick={() => handleClick("6")}>
          <i>6</i>
        </span>

        <span className="num plus" onClick={() => handleClick("+")}>
          <i>+</i>
        </span>

        <span className="num" onClick={() => handleClick("1")}>
          <i>1</i>
        </span>

        <span className="num" onClick={() => handleClick("2")}>
          <i>2</i>
        </span>

        <span className="num" onClick={() => handleClick("3")}>
          <i>3</i>
        </span>

        <span className="num" onClick={() => handleClick("0")}>
          <i>0</i>
        </span>

        <span className="num" onClick={() => handleClick("00")}>
          <i>00</i>
        </span>

        <span className="num" onClick={() => handleClick(".")}>
          <i>.</i>
        </span>

        <span className="num equal" onClick={calculate}>
          <i>=</i>
        </span>
      </form>
    </div>
  );
}

export default Dashboard;
