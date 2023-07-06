import { Duration } from "@/models/duration";

export interface Participant {
    id: number;
    name: string;
    passwordHash?: string;
    availabilities: Duration[];
}
