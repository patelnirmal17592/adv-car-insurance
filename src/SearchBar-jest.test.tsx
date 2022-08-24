import { fireEvent, render, screen } from "@testing-library/react";
import SearchBar from "./components/SearchBar/SearchBar";

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

      const input = screen.getByLabelText(
        "Ask me anything about breakdown insurance..."
      ) as HTMLInputElement;

      // Act
      fireEvent.change(input, { target: { value: `${tc.input}` } });

      // Assert
      expect(input.value).toBe(expected);
    });
  });
});
