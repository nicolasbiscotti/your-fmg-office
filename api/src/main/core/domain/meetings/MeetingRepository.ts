import { Meeting } from "./Meeting";

export interface MeetingRepository {
  find: (meetingNumber: string) => Meeting;

  booking: (meeting: Meeting) => void;

  update: (meeting: Meeting) => void;
}
