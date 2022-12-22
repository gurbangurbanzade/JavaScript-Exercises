import React from "react";
import { Input } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useState } from "react";
function Sinput() {
  let searchInput = useRef();

  const [dataArr, setDataArr] = useState("");

  return (
    <div>
      <Input
        ref={searchInput}
        placeholder="Basic usage"
        onKeyUp={(e) => {
          setDataArr(e.target.value);
        }}
      />
      <UnorderedList>
        {
          //   console.log(searchInput.current)

          searchInput.current?.value &&
            JSON.parse(localStorage.getItem("users")).map((elem, i) => {
              console.log(elem.name.toUpperCase());
              console.log(searchInput.current?.value.toUpperCase());

              if (
                elem.name
                  .toUpperCase()
                  .includes(searchInput.current.value.toUpperCase())
              ) {
                return <ListItem key={i}>{elem.name}</ListItem>;
              }
            })
        }
      </UnorderedList>
    </div>
  );
}

export default Sinput;
