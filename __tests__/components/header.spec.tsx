import { render } from "@testing-library/react";
import Header from "@/components/header";

describe("Header", () => {
    it("Should render", () => {
        const { container } = render(<Header />);

        expect(container).toMatchSnapshot();
    });
});
