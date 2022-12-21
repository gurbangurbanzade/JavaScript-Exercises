import React from "react";
import { useState } from "react";
function Calculator() {
  const [result, setResult] = useState("");
  const [count, setCount] = useState("");

  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <p>Count---{count}</p>
      <p>Result:{result}</p>
      <div>
        {arr.map((elem, i) => {
          return (
            <button
              key={i}
              onClick={(e) => {
                setCount(count + e.target.innerText);
              }}
            >
              {elem}
            </button>
          );
        })}
      </div>
      <div>
        <button
          onClick={(e) => {
            setCount(count + e.target.innerText);
          }}
        >
          +
        </button>
        <button
          onClick={(e) => {
            setCount(count + e.target.innerText);
          }}
        >
          -
        </button>
        <button
          onClick={(e) => {
            setCount(count + e.target.innerText);
          }}
        >
          *
        </button>
        <button
          onClick={(e) => {
            setCount(count + e.target.innerText);
          }}
        >
          /
        </button>

        <button
          onClick={() => {
            let customNumber = "";
            let arrNumber = [];
            console.log(count.split(""));

            count.split("").forEach((elem, i) => {
              if (elem != "+" && elem != "-" && elem != "*" && elem != "/") {
                customNumber += elem;
              } else {
                arrNumber.push(customNumber);
                arrNumber.push(elem);

                customNumber = "";
              }
            });
            arrNumber.push(customNumber);

            console.log(arrNumber);
            let sum = +arrNumber[0];

            arrNumber.forEach((elem, i) => {
              if (elem == "+") {
                sum += +arrNumber[i + 1];
                setResult(sum);
              } else if (elem == "-") {
                sum -= +arrNumber[i + 1];
                setResult(sum);
              } else if (elem == "*") {
                sum *= +arrNumber[i + 1];
                setResult(sum);
              } else if (elem == "/") {
                sum /= +arrNumber[i + 1];
                setResult(sum);
              }
            });
          }}
        >
          =
        </button>
        <button
          onClick={() => {
            setCount(count.slice(0, -1));
          }}
        >
          Sil
        </button>
        <button
          onClick={() => {
            setCount(0);
          }}
        >
          Sil Hamisini
        </button>
      </div>
    </div>
  );
}

export default Calculator;
