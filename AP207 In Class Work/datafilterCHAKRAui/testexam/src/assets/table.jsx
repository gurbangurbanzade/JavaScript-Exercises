import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
function Tablex(props) {
  let localArr = [];
  return (
    <div>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>id</Th>
              <Th>name</Th>
              <Th isNumeric>mail</Th>
              <Th>Delete</Th>
              <Th>add</Th>
            </Tr>
          </Thead>
          <Tbody>
            {props.jsonArr.map((elem, i) => {
              return (
                <Tr key={i}>
                  <Td>{elem.id}</Td>
                  <Td>{elem.name}</Td>
                  <Td>{elem.email}</Td>
                  <Td>
                    <Button
                      colorScheme="red"
                      onClick={(e) => {
                        e.target.parentElement.parentElement.remove();
                      }}
                    >
                      Delete
                    </Button>
                  </Td>

                  <Td>
                    <Button
                      className={elem.id}
                      colorScheme="blue"
                      onClick={(e) => {
                        localArr.push(
                          props.jsonArr.find(
                            (elem) => elem.id == e.target.classList[1]
                          )
                        );

                        localStorage.setItem("users", JSON.stringify(localArr));
                      }}
                    >
                      Add
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Tablex;
