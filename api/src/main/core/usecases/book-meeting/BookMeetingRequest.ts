export default class BookMeetingRequest {
  meetDate: string;
  meetTime: string;
  patientNumber: string;
  doctorNumber: string;
  meetNumber: string;

  constructor(
    meetDate: string,
    meetTime: string,
    patientNumber: string,
    doctorNumber: string,
    meetNumber: string
  ) {
    this.meetDate = meetDate;
    this.meetTime = meetTime;
    this.patientNumber = patientNumber;
    this.doctorNumber = doctorNumber;
    this.meetNumber = meetNumber;
  }
}
