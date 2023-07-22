import { GeneratedAlways, Insertable, Selectable, Updateable } from "kysely";

export interface Database {
    meetings: MeetingsTable;
}

export interface MeetingsTable {
    id: GeneratedAlways<number>;
    encrypted_data: Buffer;
}

export type Meeting = Selectable<MeetingsTable>;
export type CreateMeeting = Insertable<MeetingsTable>;
export type UpdateMeeting = Updateable<MeetingsTable>;
