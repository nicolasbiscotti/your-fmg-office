import { Meeting } from "../../../core/domain/meetings/Meeting";
import { MeetingRepository } from "../../../core/domain/meetings/MeetingRepository";

class FakeMeetingRepository implements MeetingRepository {
  meetingList: Map<string, Meeting>;

  constructor() {
    this.meetingList = new Map();
  }

  find(meetNumber: string): Meeting {
    const meeting = this.meetingList.get(meetNumber);
    if (meeting !== undefined) {
      return meeting;
    }
    const err = new Error("Meeting not found");
    err.name = "NON EXISTING MEET NUMBER"
    throw new Error();
  }

  booking(meeting: Meeting): void {
    this.meetingList.set(meeting.doctorNumber, meeting);
  }

  update(meeting: Meeting): void {}
}

export default FakeMeetingRepository;
