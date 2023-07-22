import { CreateMeetingRessource, MeetingRessource, UpdateMeetingRessource } from "@/models/ressources/meeting";

import { CreateMeeting, Meeting, UpdateMeeting } from "@/server/database/types";
import { idNumberToHash } from "@/server/idMapper";

export function meetingRessourceToDb(
    meeting: CreateMeetingRessource | UpdateMeetingRessource,
): CreateMeeting | UpdateMeeting {
    return {
        encrypted_data: new Buffer(meeting.encrypted_data, "base64"),
    };
}

export function meetingDbToRessource(meeting: Meeting): MeetingRessource {
    return {
        id: idNumberToHash(meeting.id),
        encrypted_data: meeting.encrypted_data.toString("base64"),
    };
}
