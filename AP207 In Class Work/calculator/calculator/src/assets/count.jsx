import React from "react";
import { useState } from "react";

function Count() {
  const [count, setCount] = useState("");
  const [result, setResult] = useState(0);
  const [arrNumber, setArrNumber] = useState([]);

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <p style={{ color: "red", fontSize: "30px" }}>Count={count}</p>
      <p>arrNumber={arrNumber}</p>
      <p>Result={result}</p>
      <div>
        {arr.map((number, i) => {
          return (
            <button
              key={i}
              onClick={(e) => {
                return setCount(count + e.target.innerText);
              }}
            >
              {number}
            </button>
          );
        })}
      </div>
      <button
        onClick={() => {
          return setCount(count + "+");
        }}
      >
        +
      </button>{" "}
      <button
        onClick={() => {
          return setCount(count + "-");
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          return setCount(count + "/");
        }}
      >
        /
      </button>
      <button
        onClick={() => {
          return setCount(count + "*");
        }}
      >
        *
      </button>
      <button
        onClick={() => {
          let number = "";
          let arr = [];
          console.log(count.split(""));

          count.split("").forEach((elem) => {
            if (elem != "+" && elem != "-" && elem != "*" && elem != "/") {
              number += elem;
            } else {
              arr.push(number);
              arr.push(elem);
              number = "";
            }
          });
          arr.push(number);

          console.log(arr);
          let sum = +arr[0];

          arr.forEach((elem, i) => {
            if (elem == "+") {
              sum += +arr[i + 1];
              setResult(sum);
            } else if (elem == "*") {
              sum *= +arr[i + 1];
              setResult(sum);
            } else if (elem == "/") {
              sum /= +arr[i + 1];
              setResult(sum);
            } else if (elem == "-") {
              sum -= +arr[i + 1];
              setResult(sum);
            }
          });
        }}
      >
        =
      </button>
      <button
        onClick={() => {
          return setCount(count.slice(0, -1));
        }}
      >
        sil
      </button>
    </div>
  );
}

export default Count;
