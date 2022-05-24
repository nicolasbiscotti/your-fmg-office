import MeetingNumber from "./MeetingNumber";

export default class Meeting {
  private meetDate: string;
  private meetTime: string;
  private patientNumber: string;
  private meetNumber: MeetingNumber;

  constructor(
    meetDate: string,
    meetTime: string,
    patientNumber: string,
    meetNumber: MeetingNumber
  ) {
    this.meetDate = meetDate;
    this.meetTime = meetTime;
    this.patientNumber = patientNumber;
    this.meetNumber = meetNumber;
  }

  static of(other: Meeting): Meeting {
    return new Meeting(
      other.meetDate,
      other.meetTime,
      other.patientNumber,
      other.meetNumber
    );
  }

  getMeetNumber(): MeetingNumber {
    return this.meetNumber;
  }

}
