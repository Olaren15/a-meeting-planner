import { render } from "@testing-library/react";
import Footer from "@/components/footer";

describe("Footer", () => {
    it("Should render", () => {
        const { container } = render(<Footer />);

        expect(container).toMatchSnapshot();
    });
});
