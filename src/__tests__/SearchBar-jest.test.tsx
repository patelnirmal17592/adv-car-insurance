import { fireEvent, render, screen } from "@testing-library/react";
import SearchBar from "../components/SearchBar/SearchBar";

describe("Punctuation Tests", () => {
  // Array of test cases
  const testcases = [
    { input: "hello%world" },
    { input: "!hello world" },
    { input: ";hello?world!" },
    { input: "hello;world" },
    { input: "hello world?" },
  ];

  // Map through the array
  testcases.map((tc) => {
    return it(`when string is ${tc.input} return hello world`, () => {
      // Renders the SeachBar component with the handleChange function
      render(<SearchBar />);
      // Arrange
      const expected = "hello world";

      // Assign the current value of the Label to the input variable
      // Retrives the component from the tree and allows us to get the Label text
      const input = screen.getByLabelText(
        "Ask me anything about breakdown insurance..."
      ) as HTMLInputElement;

      // Act
      // Simulate a user inputting text into the input field
      // Triggers onChange event
      fireEvent.input(input, { target: { value: `${tc.input}` } });

      // Assert
      expect(input.value).toBe(expected);
    });
  });
});

// describe("input field", () => {
//   it("renders correctly", () => {
//     render(<SearchBar />);

//     const input = screen.getByLabelText(
//       "Ask me anything about breakdown insurance..."
//     ) as HTMLInputElement;

//     expect(input).toBeInTheDocument();
//   });
// });
