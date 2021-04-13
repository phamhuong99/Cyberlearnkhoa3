import React, { Component } from "react";
import { Container } from "../ComponentsToDoList/Container";
import { ThemeProvider } from "styled-components";
import { ToDoListDrakTheme } from "../../Themes/ToDoListDarkTheme";
import { ToDoListLightTheme } from "../../Themes/ToDoListLightTheme";
import { Dropdown } from "../ComponentsToDoList/Dropdown";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
} from "../ComponentsToDoList/Heading";
import { Button } from "../ComponentsToDoList/Button";
import { Table, Tr, Td, Th, Thead, Tbody } from "../ComponentsToDoList/Table";
import { TextField, Label, Input } from "../ComponentsToDoList/TextField";
export default class ToDoList extends Component {
  render() {
    return (
      <ThemeProvider theme={ToDoListLightTheme}>
        <Container className="w-50">
          <Dropdown>
            <option>Dark theme</option>
            <option>Light theme</option>
            <option>Primary theme</option>
          </Dropdown>
          <Heading3>To Do List</Heading3>
          <TextField label="Tast name" className="w-50" />
          <Button className="ml-2">
            <i className="fa fa-plus"></i> Add task
          </Button>
          <Button className="ml-2">
            <i className="fa fa-upload"></i> Update task
          </Button>
          <hr />

          <Heading3>Task to do</Heading3>
          <Table>
            <Thead>
              <Tr>
                <th style={{ verticalAlign: "middle" }}>Task name</th>
                <th className="text-right">
                  <Button>
                    <i className="fa fa-edit"></i>{" "}
                  </Button>
                  <Button>
                    <i className="fa fa-check"></i>{" "}
                  </Button>
                  <Button>
                    <i className="fa fa-trash"></i>{" "}
                  </Button>
                </th>
              </Tr>
              <Tr>
                <th style={{ verticalAlign: "middle" }}>Task name</th>
                <th className="text-right">
                  <Button>
                    <i className="fa fa-edit"></i>{" "}
                  </Button>
                  <Button>
                    <i className="fa fa-check"></i>{" "}
                  </Button>
                  <Button>
                    <i className="fa fa-trash"></i>{" "}
                  </Button>
                </th>
              </Tr>
            </Thead>
          </Table>
        </Container>
      </ThemeProvider>
    );
  }
}
