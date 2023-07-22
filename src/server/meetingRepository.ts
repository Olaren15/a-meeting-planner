import { CreateMeetingRessource, MeetingRessource, UpdateMeetingRessource } from "@/models/ressources/meeting";

import { db } from "@/server/database/dbClient";
import { CreateMeeting, UpdateMeeting } from "@/server/database/types";
import { idHashToNumber } from "@/server/idMapper";
import { meetingDbToRessource, meetingRessourceToDb } from "@/server/meetingMapper";

export async function getMeetingById(id: string): Promise<MeetingRessource | null> {
    const numericId = idHashToNumber(id);

    const meeting = await db.selectFrom("meetings").selectAll().where("id", "=", numericId).executeTakeFirst();

    if (!meeting) {
        return null;
    }

    return meetingDbToRessource(meeting);
}

export async function createMeeting(meeting: CreateMeetingRessource): Promise<MeetingRessource> {
    const newMeeting = meetingRessourceToDb(meeting) as CreateMeeting;

    const createdMeeting = await db.insertInto("meetings").values(newMeeting).returningAll().executeTakeFirstOrThrow();

    return meetingDbToRessource(createdMeeting);
}

export async function updateMeeting(id: string, meeting: UpdateMeetingRessource): Promise<MeetingRessource | null> {
    const numericId = idHashToNumber(id);
    const updateData = meetingRessourceToDb(meeting) as UpdateMeeting;

    const updatedMeeting = await db
        .updateTable("meetings")
        .set(updateData)
        .where("id", "=", numericId)
        .returningAll()
        .executeTakeFirst();

    if (!updatedMeeting) {
        return null;
    }

    return meetingDbToRessource(updatedMeeting);
}
