import { Duration } from "@/models/duration";

export class Participant {
    id: number;
    name: string;
    passwordHash?: string;
    availabilities: Duration[];

    constructor(id: number, name: string, availabilities: Duration[], passwordHash?: string) {
        this.id = id;
        this.name = name;
        this.availabilities = availabilities;
        this.passwordHash = passwordHash;
    }
}
