import Hashids from "hashids";

const hashIds = new Hashids("A Meeting Planner", 10);

export function idHashToNumber(hash: string): number {
    return hashIds.decode(hash)[0] as number;
}

export function idNumberToHash(number: number): string {
    return hashIds.encode(number);
}
