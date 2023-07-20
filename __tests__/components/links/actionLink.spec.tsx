import ActionLink from "@/components/links/actionLink";

import { render, screen } from "@testing-library/react";

describe("ActionLink", () => {
    const href = "https://link.com";

    it("Should pass through the href attribute to the underlying link", () => {
        render(<ActionLink href={href} />);

        const link = screen.getByRole("link");

        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href", href);
    });

    it("Should add the className prop to the underlying link element", () => {
        const className = "text-2xl";
        render(<ActionLink href={href} className={className} />);

        const link = screen.getByRole("link");

        expect(link).toHaveClass("gap-1.5", className);
    });

    it("Should display the desired text in the link element", () => {
        const text = "This is a link";
        render(<ActionLink href={href}>{text}</ActionLink>);

        const link = screen.getByRole("link");

        expect(link).toHaveTextContent(text);
    });
});
