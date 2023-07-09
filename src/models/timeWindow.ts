import { Temporal } from "@js-temporal/polyfill";

export class TimeWindow {
    public after: Temporal.PlainTime;
    public before: Temporal.PlainTime;
    public timeZone: Temporal.TimeZone;

    constructor(
        after: Temporal.PlainTime | string,
        before: Temporal.PlainTime | string,
        timeZone: Temporal.TimeZone | string,
    ) {
        this.after = Temporal.PlainTime.from(after);
        this.before = Temporal.PlainTime.from(before);
        this.timeZone = Temporal.TimeZone.from(timeZone) as Temporal.TimeZone;
    }
}
