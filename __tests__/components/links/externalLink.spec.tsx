import { render, screen } from "@testing-library/react";
import ExternalLink from "@/components/links/externalLink";

describe("ExternalLInk", () => {
    const href = "https://link.com";

    it("Should pass through the href attribute to the underlying link and open the link in a new tab", () => {
        render(<ExternalLink href={href} />);

        const link = screen.getByRole("link");

        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href", href);
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("Should add the className prop to the underlying link element", () => {
        const className = "text-2xl";
        render(<ExternalLink href={href} className={className} />);

        const link = screen.getByRole("link");

        expect(link).toHaveClass("gap-1.5", className);
    });

    it("Should display the desired text in the link element", () => {
        const text = "This is a link";
        render(<ExternalLink href={href}>{text}</ExternalLink>);

        const link = screen.getByRole("link");

        expect(link).toHaveTextContent(text);
    });

    it("Should tell screen readers that the links opens in a new tab", () => {
        render(<ExternalLink href={href} />);

        const newTabIcon = screen.getByRole("img");

        expect(newTabIcon).toHaveAccessibleName("opens in a new tab");
    });
});
