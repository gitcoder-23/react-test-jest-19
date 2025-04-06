import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // Check for the presence of the "learn react" link in the App component
  // const linkElement = screen.getByText(
  //   (content, element) =>
  //     element.tagName.toLowerCase() === "a" && /learn react/i.test(content)
  // );
  // expect(linkElement).toBeInTheDocument();

  const counterElement = screen.getByTestId("count");
  expect(counterElement).toBeInTheDocument();
});
