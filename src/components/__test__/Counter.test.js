import react from 'react';
import Counter from "../Counter";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

beforeEach(() => {
    const component = render(<Counter />);
    getByTestId = component.getByTestId;
})

test("test header renders correctly", () => {
    
    const header = getByTestId("header");

    expect(header.textContent).toBe("My Counter");
})

test("Counter initially starts at 0", () => {

    const counter = getByTestId("counter");

    expect(counter.textContent).toBe("0");
})

test("input exists and initial value is 1", () => {

    const input = getByTestId("input");

    expect(input.value).toBe("1");
})

test("add button renders a +", () => {

    const addBtn = getByTestId("add-btn");

    expect(addBtn.textContent).toBe("+");
})

test("minus button renders a -", () => {

    const minusBtn = getByTestId("minus-btn");

    expect(minusBtn.textContent).toBe("-");
})

test("changing value of input works correctly", () => {

    const input = getByTestId("input");

    fireEvent.click(input, {
        target: {
            value: "5"
        }
    });

    expect(input.value).toBe("5");
})

test("clicking on + button increments counter by 1", () => {

    const addBtn = getByTestId("add-btn");
    const counter = getByTestId("counter");

    expect(counter.textContent).toBe("0");

    fireEvent.click(addBtn);

    expect(counter.textContent).toBe("1");
})

test("clicking on - button increments counter by 1", () => {

    const minusBtn = getByTestId("minus-btn");
    const counter = getByTestId("counter");

    expect(counter.textContent).toBe("0");

    fireEvent.click(minusBtn);

    expect(counter.textContent).toBe("-1");
})

test("changing input and clicking on + works correctly", () => {

    const addBtn = getByTestId("add-btn");
    const counter = getByTestId("counter");
    const input = getByTestId("input");

    expect(counter.textContent).toBe("0");

    fireEvent.change(input, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(addBtn);

    expect(counter.textContent).toBe("5");
})

test("changing input and clicking on - works correctly", () => {

    const minusBtn = getByTestId("minus-btn");
    const counter = getByTestId("counter");
    const input = getByTestId("input");

    expect(counter.textContent).toBe("0");

    fireEvent.change(input, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(minusBtn);

    expect(counter.textContent).toBe("-5");
})

test("changing input and clicking on + and - works correctly", () => {

    const addBtn = getByTestId("add-btn");
    const minusBtn = getByTestId("minus-btn");
    const counter = getByTestId("counter");
    const input = getByTestId("input");

    expect(counter.textContent).toBe("0");

    fireEvent.change(input, {
        target: {
            value: "10"
        }
    })

    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    fireEvent.click(addBtn);

    expect(counter.textContent).toBe("30");

    fireEvent.click(minusBtn);
    fireEvent.click(minusBtn);

    expect(counter.textContent).toBe("10");
})

test("color of counter changes correctly", () => {

    const addBtn = getByTestId("add-btn");
    const minusBtn = getByTestId("minus-btn");
    const counter = getByTestId("counter");
    const input = getByTestId("input");

    expect(counter.className).toBe("");

    fireEvent.change(input, {
        target: {
            value: "50"
        }
    })

    fireEvent.click(addBtn);

    expect(counter.className).toBe("");

    fireEvent.click(addBtn);
    fireEvent.click(addBtn);

    expect(counter.className).toBe("green");

    fireEvent.click(minusBtn);
    fireEvent.click(minusBtn);

    expect(counter.className).toBe("");

    fireEvent.click(minusBtn);
    fireEvent.click(minusBtn);
    fireEvent.click(minusBtn);

    expect(counter.className).toBe("red");
})


