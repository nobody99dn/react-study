import Button from "./index";
import { unmountComponentAtNode } from "react-dom";
import { render, act, fireEvent, cleanup } from "@testing-library/react";
import { screen } from "@testing-library/dom";

describe("render button", () => {
  let container: HTMLElement;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    container.remove();
    cleanup();
  });

  it('render button with content', () => {
    act(() => {
      render(<Button title="Button" />, { container });
    });

    expect(container.textContent).toMatch("Button");
  });

  it('should be click 2 timer', () => {
    const myMock = jest.fn();
    act(() => {
      render(<Button title="Button" onClick={myMock} />, { container });
    });

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(myMock).toHaveBeenCalledTimes(1);

    fireEvent.click(button);

    expect(myMock).toHaveBeenCalledTimes(2);
  });

  it('should render loading button', () => {
    act(() => {
      render(<Button title="Button" isLoading />, { container });
    });

    const button: HTMLElement = screen.getByRole("button");

    expect(button.textContent).toMatch("Loading...");
  });

  it('should render correctly', () => {
    act(() => {
      render(<Button title="Button" />, { container });
    });

    expect(container.innerHTML).toMatchInlineSnapshot(
      `"<button class=\\"btn btn-default false\\">Button</button>"`
    );

    act(() => {
      render(<Button title="Disable Button" isDisabled />, { container });
    });

    expect(container.innerHTML).toMatchInlineSnapshot(
      `"<button class=\\"btn btn-default disabled\\" disabled=\\"\\">Disable Button</button>"`
    );
  });
});
