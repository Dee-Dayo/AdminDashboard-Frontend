// src/components/Navbar.test.js
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

test("renders Navbar with title", () => {
  render(<Navbar />);
  const titleElement = screen.getByText(/Admin Panel/i);
  expect(titleElement).toBeInTheDocument();
});