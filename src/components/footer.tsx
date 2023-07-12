import ExternalLink from "@/components/links/externalLink";

export default function Footer() {
    return (
        <footer className={"flex flex-col content-between gap-1 bg-neutral-600 p-4 text-center text-white"}>
            <p className={"text-lg"}>Made with 🤍 by a friend of Blåhaj</p>
            <p>
                Find the source code on{" "}
                <ExternalLink href={"https://github.com/Olaren15/a-meeting-planner"}>GitHub</ExternalLink>
            </p>
        </footer>
    );
}
