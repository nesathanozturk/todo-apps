import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

import Form from "../components/Form";
import { Provider } from "../context/form";

describe("Form component", () => {
  beforeEach(() => {
    render(
      <Provider>
        <Form />
      </Provider>
    );
  });

  it("should todo title render", () => {
    const todoTitle = screen.getByText(/my todo list/i);

    expect(todoTitle).toBeInTheDocument();
  });

  it("should input render", () => {
    const inputEl = screen.getByPlaceholderText(/add something to do/i);

    expect(inputEl).toBeInTheDocument();
  });

  it("should add button render", () => {
    const addButton = screen.getByRole("button", {
      name: "Add",
    });

    expect(addButton).toBeInTheDocument();
  });

  it("should clear button render", () => {
    const clearButton = screen.getByRole("button", {
      name: "Clear",
    });

    expect(clearButton).toBeInTheDocument();
  });

  it("should write a text to input", async () => {
    const user = userEvent.setup();

    const inputEl = screen.getByPlaceholderText(/add something to do/i);
    await user.type(inputEl, "Learn React");

    expect(inputEl).toHaveValue("Learn React");
  });

  it("should add a new item", async () => {
    const user = userEvent.setup();

    const addButton = screen.getByRole("button", {
      name: "Add",
    });
    const inputEl = screen.getByPlaceholderText(/add something to do/i);

    const todoItemTitle = "Learn React";
    await user.type(inputEl, todoItemTitle);

    await user.click(addButton);

    const todoItem = screen.getByText("Learn React");

    expect(todoItem).toBeInTheDocument();
  });

  it("should clear input placeholder after click", async () => {
    const user = userEvent.setup();

    const addButton = screen.getByRole("button", {
      name: "Add",
    });
    const inputEl = screen.getByPlaceholderText(/add something to do/i);

    const todoItemTitle = "Learn React";
    await user.type(inputEl, todoItemTitle);

    await user.click(addButton);

    expect(inputEl).toHaveValue("");
  });

  it("should clear all todo items after click clear button", async () => {
    const user = userEvent.setup();

    const clearButton = screen.getByRole("button", {
      name: "Clear",
    });
    const todoItem = screen.queryAllByRole("listitem");

    user.click(clearButton);

    expect(todoItem).toHaveLength(0);
  });

  it("should delete todo item", async () => {
    const user = userEvent.setup();

    const addButton = screen.getByRole("button", {
      name: "Add",
    });
    const inputEl = screen.getByPlaceholderText(/add something to do/i);

    const todoItemTitle = "Learn React";
    await user.type(inputEl, todoItemTitle);

    await user.click(addButton);

    const todoItem = screen.getByText("Learn React");

    const deleteButton = screen.getByTestId("delete-button");
    await user.click(deleteButton);

    expect(todoItem).not.toBeInTheDocument();
  });

  it("should complete todo item", async () => {
    const user = userEvent.setup();

    const addButton = screen.getByRole("button", {
      name: "Add",
    });
    const inputEl = screen.getByPlaceholderText(/add something to do/i);

    const todoItemTitle = "Learn React";
    await user.type(inputEl, todoItemTitle);

    await user.click(addButton);

    const todoItem = screen.getByText("Learn React");

    const completedButton = screen.getByTestId("completed-button");
    await user.click(completedButton);

    expect(todoItem).toHaveClass("done");
  });

  it("should not complete todo item when click again complete icon", async () => {
    const user = userEvent.setup();

    const addButton = screen.getByRole("button", {
      name: "Add",
    });
    const inputEl = screen.getByPlaceholderText(/add something to do/i);

    const todoItemTitle = "Learn React";
    await user.type(inputEl, todoItemTitle);

    await user.click(addButton);

    const todoItem = screen.getByText("Learn React");

    const completedButton = screen.getByTestId("completed-button");
    await user.click(completedButton);

    expect(todoItem).toHaveClass("done");

    await user.click(completedButton);

    expect(todoItem).not.toHaveClass("done");
  });
});
