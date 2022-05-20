import Meeting from "./Meeting";
import MeetingNumber from "./MeetingNumber";

export default interface MeetingRepository {
  find: (meetingNumber: MeetingNumber) => Meeting;
  booking: (meeting: Meeting) => void;
  update: (meeting: Meeting) => void;
}
