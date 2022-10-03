import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("Renders navbar with welcome text on initial screen", () => {
  render(<App />);
  const title = screen.getByText("Rick and Morty");
  const linkElement = screen.getByText("Contact");
  const welcomePrompt = screen.getByText("Welcome!");
  const welcomeDescription = screen.getByText(
    "Click on the Contact button to get started."
  );

  expect(title).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
  expect(welcomePrompt).toBeInTheDocument();
  expect(welcomeDescription).toBeInTheDocument();
});

test("Contact button on navbar renders Contact page on click with all dropdown options", () => {
  render(<App />);
  fireEvent.click(screen.getByText("Contact"));

  const searchBar = screen.getByPlaceholderText("Search for characters...");

  const genderSelectOption1 = screen.getByText("Gender");
  const genderSelectOption2 = screen.getByText("Male");
  const genderSelectOption3 = screen.getByText("Female");
  const genderSelectOption4 = screen.getByText("Genderless");

  const statusSelectOption1 = screen.getByText("Status");
  const statusSelectOption2 = screen.getByText("Dead");
  const statusSelectOption3 = screen.getByText("Alive");

  const unknownSelectOptions = screen.getAllByText("Unknown");

  expect(searchBar).toBeInTheDocument();
  expect(genderSelectOption1).toBeInTheDocument();
  expect(genderSelectOption2).toBeInTheDocument();
  expect(genderSelectOption3).toBeInTheDocument();
  expect(genderSelectOption4).toBeInTheDocument();
  expect(statusSelectOption1).toBeInTheDocument();
  expect(statusSelectOption2).toBeInTheDocument();
  expect(statusSelectOption3).toBeInTheDocument();

  expect(unknownSelectOptions).toHaveLength(2);
});

test("Contact list should have a maximum of 20 contacts", async () => {
  render(<App />);
  fireEvent.click(screen.getAllByLabelText("dropdown")[0]);
  fireEvent.click(screen.getByText("Male"));

  await screen.findAllByRole("listitem");

  const contactListItems = screen.getAllByRole("listitem");

  expect(contactListItems).toHaveLength(20);
});
