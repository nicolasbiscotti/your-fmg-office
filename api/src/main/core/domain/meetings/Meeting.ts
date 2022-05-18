export class Meeting {
  meetDate: string;
  meetTime: string;
  patientNumber: string;
  doctorNumber: string;
  meetNumber: string;

  constructor(
    meetDate = "",
    meetTime = "",
    patientNumber = "",
    doctorNumber = "",
    meetNumber = ""
  ) {
    this.meetDate = meetDate;
    this.meetTime = meetTime;
    this.patientNumber = patientNumber;
    this.doctorNumber = doctorNumber;
    this.meetNumber = meetNumber;
  }
}
