import { render, screen } from "@testing-library/react";
import Create from "@/app/create/page";

describe("Create", () => {
    it("Should contain a header", () => {
        render(<Create />);

        const header = screen.getByRole("heading");

        expect(header).toBeInTheDocument();
    });
});
