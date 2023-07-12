import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
    it("Should contain a link that points to the create page", () => {
        render(<Home />);

        const createLink = screen.getByRole("link");

        expect(createLink).toBeInTheDocument();
        expect(createLink).toHaveAttribute("href", "/create");
    });
});
