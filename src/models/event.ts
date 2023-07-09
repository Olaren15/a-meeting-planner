import { Duration } from "@/models/duration";
import { Participant } from "@/models/participant";
import { TimeWindow } from "@/models/timeWindow";
import { SerializedEvent } from "@/models/serializedEvent";

export class Event {
    public timeSpan: Duration;
    public timeWindow: TimeWindow;
    public participants: Participant[];

    constructor(
        timeSpan: Duration,
        timeWindow: TimeWindow,
        participants: Participant[] = [],
    ) {
        this.timeSpan = timeSpan;
        this.timeWindow = timeWindow;
        this.participants = participants;
    }

    public static fromJSON(json: string): Event {
        const serializedEvent = JSON.parse(json) as SerializedEvent;

        return new Event(
            new Duration(
                serializedEvent.timeSpan.startTime,
                serializedEvent.timeSpan.endTime,
            ),
            new TimeWindow(
                serializedEvent.timeWindow.after,
                serializedEvent.timeWindow.before,
                serializedEvent.timeWindow.timeZone,
            ),
            serializedEvent.participants.map(
                (participant) =>
                    new Participant(
                        participant.id,
                        participant.name,
                        participant.availabilities.map(
                            (availability) =>
                                new Duration(
                                    availability.startTime,
                                    availability.endTime,
                                ),
                        ),
                        participant.passwordHash,
                    ),
            ),
        );
    }
}
