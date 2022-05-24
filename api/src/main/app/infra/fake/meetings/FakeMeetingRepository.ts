import RepositoryExecption from "../../../core/domain/exceptions/RepositoryException";
import RepositoryMessages from "../../../core/domain/exceptions/RepositoryMessages";
import Meeting from "../../../core/domain/meetings/Meeting";
import MeetingNumber from "../../../core/domain/meetings/MeetingNumber";
import MeetingRepository from "../../../core/domain/meetings/MeetingRepository";

class FakeMeetingRepository implements MeetingRepository {
  private readonly repository: Map<MeetingNumber, Meeting>;

  constructor() {
    this.repository = new Map();
  }

  find(meetNumber: MeetingNumber): Meeting {
    const meeting = this.repository.get(meetNumber);
    if (meeting) {
      return meeting;
    }
    throw new RepositoryExecption(
      RepositoryMessages.REPOSITORY_DOES_NOT_CONTAIN_THE_REQUESTED
    );
  }

  booking(meeting: Meeting): void {
    const meetingNumber = meeting.getMeetNumber()
    this.repository.set(meetingNumber, meeting);
  }

  update(meeting: Meeting): void {}
}

export default FakeMeetingRepository;
