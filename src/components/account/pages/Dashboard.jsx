/**
 *!/usr/bin/env node
 * -*- coding: utf-8 -*-
 * DizzyCalc
 */

/**
 * author: OTechCup
 * copyright: &copy; 2024 - new Date().getFullYear() All Rights Reserved | Exfac
 * credits: ["Mr. O", "Bridget"]
 * version: Beta v0.1.0
 * maintainer: OTechCup
 * email: support@exfac.info
 */

// import modules

import { useState } from "react";

function Dashboard() {
  const [value, setValue] = useState("");
  const [points, setPoints] = useState(0);
  const [mapping, setMapping] = useState(null);
  const [isRandom, setIsRandom] = useState(false);

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
      "00",
      ".",
    ];
    const operations = ["+", "-", "*", "/"];
    const actionButton = ["clear", "backspace", "calculate"];
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
      "00": randomDigits[11],
      "+": randomOperations[0],
      "-": randomOperations[1],
      "*": randomOperations[2],
      "/": randomOperations[3],
      clear: randomActionButton[0],
      calculate: randomActionButton[1],
      backspace: randomActionButton[2],
    };
  }

  function randomArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  // function handleClick(digitOrOperation) {
  //   if (!isRandom) {
  //     setValue(value + digitOrOperation);
  //   } else {
  //     setValue(value + (mapping[digitOrOperation] || digitOrOperation));
  //   }
  // }

  function handleClick(digitOrOperation) {
    const mappedValue = isRandom
      ? mapping[digitOrOperation] || digitOrOperation
      : digitOrOperation;

    if (mappedValue === "clear") {
      clear();
    } else if (mappedValue === "backspace") {
      backspace();
    } else if (mappedValue === "calculate") {
      calculate();
    } else {
      setValue(value + mappedValue);
    }
  }


  function clear() {
    setValue("");
    setPoints(0);
  }

  function backspace() {
    setPoints(points - 1);
    setValue(value.slice(0, -1));
  }

  function calculate() {
    if (!isRandom) {
      setMapping(generateMapping());
      setIsRandom(true);
      setValue("");
    } else {
      try {
        const result = eval(value);
        setPoints(points + value.length);
        setValue(result.toString());
        setMapping(generateMapping());
      } catch (error) {
        setValue("Error");
         setMapping(generateMapping());
      }
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

        <span className="num clear" onClick={() => handleClick("clear")}>
          <i>C</i>
        </span>

        <span className="num" onClick={() => handleClick("backspace")}>
          <i>←</i>
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

        <span className="num equal" onClick={() => handleClick("calculate")}>
          <i>{isRandom ? "=" : "Go"}</i>
        </span>
      </form>
    </div>
  );
}

export default Dashboard;
