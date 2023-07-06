import { Duration } from "@/models/duration";
import { Participant } from "@/models/participant";

export interface Event {
    timeSpan: Duration;
    participants: Participant[];
}
