import { useState } from "react";

function Dashboard() {
  const [value, setValue] = useState("");
  const [points, setPoints] = useState(0);
  const [mapping, setMapping] = useState(generateMapping());

  function generateMapping() {
    return {
      1: randomDigit(),
      2: randomDigit(),
      3: randomDigit(),
      4: randomDigit(),
      5: randomDigit(),
      6: randomDigit(),
      7: randomDigit(),
      8: randomDigit(),
      9: randomDigit(),
      0: randomDigit(),
      "+": randomOperation(),
      "-": randomOperation(),
      "*": randomOperation(),
      "/": randomOperation(),
    };
  }

  function randomDigit() {
    const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "00"];
    return digits[Math.floor(Math.random() * digits.length)];
  }

  function randomOperation() {
    const operations = ["+", "-", "*", "/"];
    return operations[Math.floor(Math.random() * operations.length)];
  }

  function handleClick(digitOrOperation) {
    setValue(value + (mapping[digitOrOperation] || digitOrOperation));
  }
  
  function clear() {
    // calculate function
    try {
      const result = eval(value);
      setPoints(points + value.length);
      setValue(result.toString());
    } catch (error) {
      setValue("Error");
    }
  }
  
  function backspace() {
    //Clear function

    setMapping(generateMapping());
    setValue("");
    setPoints(0);
  }
  
  function calculate() {
    // backspace function
    setMapping(generateMapping());
    setPoints(points - 1);
    setValue(value.slice(0, -1));
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

        <span className="num" onClick={backspace}>
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

        <span className="num equal" onClick={calculate}>
          <i>=</i>
        </span>
      </form>
    </div>
  );
}

export default Dashboard;
