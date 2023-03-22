import { Button, Input } from "antd";
import { useState } from "react";

function Cal() {
  const [result, setresult] = useState("");

  const handleClick = (value) => {
    setresult(result.concat(value));
  };

  const calculate = () => {
    if (eval() === undefined) {
        alert("Enter a value")
    }
    setresult(eval(result).toString());
  };

  const clear = () => {
    setresult("");
  };

  return (
    <div className="main_div">
      <div>
        <Input placeholder="00" value={result} />
      </div>
      <div className="btn_div">
        <Button onClick={clear} className="clear">
          Clear
        </Button>

        <Button className="operator" onClick={() => handleClick("/")}>
          &divide;
        </Button>

        <Button  onClick={() => handleClick("7")}>
          7
        </Button>

        <Button  onClick={() => handleClick("8")}>
          8
        </Button>

        <Button className="operator" onClick={() => handleClick("-")}>
          &ndash;
        </Button>

        <Button  onClick={() => handleClick("9")}>
          9
        </Button>
        <Button  onClick={() => handleClick("4")}>
          4
        </Button>

        <Button className="operator" onClick={() => handleClick("*")}>
          &times;
        </Button>

        <Button  onClick={() => handleClick("5")}>
          5
        </Button>

        <Button  onClick={() => handleClick("6")}>
          6
        </Button>

        <Button className="operator" onClick={() => handleClick("+")}>
          +
        </Button>

        <Button  onClick={() => handleClick("1")}>
          1
        </Button>

        <Button  onClick={() => handleClick("2")}>
          2
        </Button>

        <Button className="operator" onClick={() => handleClick(".")}>
          .
        </Button>

        <Button  onClick={() => handleClick("3")}>
          3
        </Button>

        <Button      onClick={() => handleClick("/")}>
          0
        </Button>

        <Button className="operator" onClick={calculate}>=</Button>
      </div>
    </div>
  );
}

export default Cal;
