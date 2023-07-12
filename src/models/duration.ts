import { Temporal } from "@js-temporal/polyfill";

export class Duration {
    startTime: Temporal.Instant;
    endTime: Temporal.Instant;

    constructor(startTime: Temporal.Instant | string, endTime: Temporal.Instant | string) {
        this.startTime = Temporal.Instant.from(startTime);
        this.endTime = Temporal.Instant.from(endTime);
    }
}
