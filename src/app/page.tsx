import ActionLink from "@/components/links/actionLink";

export default function Home() {
    return (
        <div className={"flex h-full flex-col items-center justify-center"}>
            <ActionLink href={"/create"} className={"text-xl"}>
                Create an event
            </ActionLink>
        </div>
    );
}
