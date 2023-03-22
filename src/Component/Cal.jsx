import { Button, Input } from "antd";
import { useState } from "react";

function Cal() {
  const [result, setresult] = useState("");

  const [screenval, setscreenval] = useState("");

  const handleClick = (e) => {
    setresult(result.concat(e.target.value));
  };

  const calculate = () => {
    setresult(eval(result));
  };

  console.log(result);

  const clear = () => {
    setresult("");
  };

  return (
    <div className="main_div">
      <div>
        <Input placeholder="Basic usage" value={result} />
      </div>
      <div className="btn_div">
        <Button onClick={clear} className="clear">
          Clear
        </Button>

        <Button value="/" onClick={handleClick}>
          &divide;
        </Button>

        <Button value="7" onClick={handleClick}>
          7
        </Button>

        <Button value="8" onClick={handleClick}>
          8
        </Button>

        <Button value="-" onClick={handleClick}>
          &ndash;
        </Button>

        <Button value="9" onClick={handleClick}>
          9
        </Button>
        <Button value="4" onClick={handleClick}>
          4
        </Button>

        <Button value="*" onClick={handleClick}>
          &times;
        </Button>

        <Button value="5" onClick={handleClick}>
          5
        </Button>

        <Button value="6" onClick={handleClick}>
          6
        </Button>

        <Button value="+" onClick={handleClick}>
          +
        </Button>

        <Button value="1" onClick={handleClick}>
          1
        </Button>

        <Button value="2" onClick={handleClick}>
          2
        </Button>

        <Button value="." onClick={handleClick}>
          .
        </Button>

        <Button value="3" onClick={handleClick}>
          3
        </Button>

        <Button value="0" onClick={handleClick}>
          0
        </Button>

        <Button onClick={calculate}>=</Button>
      </div>
    </div>
  );
}

export default Cal;
