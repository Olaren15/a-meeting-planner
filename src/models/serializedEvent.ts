export interface SerializedEvent {
    timeSpan: {
        startTime: string;
        endTime: string;
    };
    timeWindow: {
        after: string;
        before: string;
        timeZone: string;
    };
    participants: {
        id: number;
        name: string;
        passwordHash: string;
        availabilities: {
            startTime: string;
            endTime: string;
        }[];
    }[];
}
