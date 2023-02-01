import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Home from "../components/Home";

test("uses the 'name' and 'city' props to display the correct text", () => {
  render(<Home name="Liza" city="New York" color="firebrick" />);


  render(<Home name="Duane" city="Queens" color="firebrick" />);

});

test("uses the 'color' prop to set the inline style color of the h1", () => {
  const { container } = render(
    <Home name="Liza" city="New York" color="firebrick" />
  );
  const h1 = container.querySelector("h1");

});
