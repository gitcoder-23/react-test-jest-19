import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe(Counter, () => {
  // to check prop data
  test("counter displays correct initial count", () => {
    // render function using react testing library
    render(<Counter initialCount={0} />);
    const countValue = Number(screen.getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });

  // to increment
  test("count should increment by 1 if the increment button is clicked", () => {
    // render function using react testing library
    render(<Counter initialCount={0} />);
    const incrementBtn = screen.getByRole("button", { name: "Increment" });
    const countValue1 = Number(screen.getByTestId("count").textContent);
    expect(countValue1).toEqual(0);
    fireEvent.click(incrementBtn);
    const countValue2 = Number(screen.getByTestId("count").textContent);
    expect(countValue2).toEqual(1);
    fireEvent.click(incrementBtn);
    const countValue3 = Number(screen.getByTestId("count").textContent);
    expect(countValue3).toEqual(2);
  });

  // to decrement

  test("count should not decrement below 0 if the decrement button is clicked", () => {
    // render function using react testing library
    render(<Counter initialCount={0} />);

    // Find the decrement button
    const decrementBtn = screen.getByRole("button", { name: "Decrement" });

    // Get the initial count (should be 0)
    const countValue1 = Number(screen.getByTestId("count").textContent);
    expect(countValue1).toEqual(0);

    // Click the decrement button
    fireEvent.click(decrementBtn);

    // Get the updated count after the button click
    const countValue2 = Number(screen.getByTestId("count").textContent);

    // Expect the count to still be 0 since we shouldn't allow it to go below 0
    expect(countValue2).toEqual(0);
  });

  test("count should decrement by 1 if the decrement button is clicked (when count is greater than 0)", () => {
    // render function using react testing library with an initial count of 2
    render(<Counter initialCount={2} />);

    const decrementBtn = screen.getByRole("button", { name: "Decrement" });

    // Get the initial count (should be 2)
    const countValue1 = Number(screen.getByTestId("count").textContent);
    expect(countValue1).toEqual(2);

    // Click the decrement button
    fireEvent.click(decrementBtn);

    // Get the updated count (should be 1)
    const countValue2 = Number(screen.getByTestId("count").textContent);
    expect(countValue2).toEqual(1);
  });

  // to restart

  test("count should be 0 if restart button is clicked", () => {
    // render function using react testing library with an initial count of 2
    render(<Counter initialCount={50} />);

    const restartBtn = screen.getByRole("button", { name: "Restart" });

    const countValue1 = Number(screen.getByTestId("count").textContent);
    expect(countValue1).toEqual(50);

    fireEvent.click(restartBtn);

    const countValue2 = Number(screen.getByTestId("count").textContent);
    expect(countValue2).toEqual(0);
  });

  // to switch

  test("count should invert sign if switch sign button is clicked", () => {
    // render function using react testing library with an initial count of 2
    render(<Counter initialCount={50} />);

    const switchSignBtn = screen.getByRole("button", { name: "Swich Signs" });

    const countValue1 = Number(screen.getByTestId("count").textContent);
    expect(countValue1).toEqual(50);

    fireEvent.click(switchSignBtn);

    const countValue2 = Number(screen.getByTestId("count").textContent);
    expect(countValue2).toEqual(-50);
  });
});
