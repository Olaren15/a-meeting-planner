import { describe } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
    it("renders 'hello world'", () => {
        render(<Home />);

        const heading = screen.getByRole("heading");

        expect(heading).toBeInTheDocument();
    });
});
