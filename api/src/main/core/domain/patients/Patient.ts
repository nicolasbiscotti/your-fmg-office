import PatientName from "./PatientName";
import PatientNumber from "./PatientNumber";

export default class Patient {
  private patientNumber: PatientNumber;
  private patientName: PatientName;

  constructor(patientNumber: PatientNumber, patientName: PatientName) {
    this.patientNumber = patientNumber;
    this.patientName = patientName;
  }

  static of(other: Patient): Patient {
    return new Patient(other.getPatientNumber(), other.getPatientName());
  }

  getPatientNumber(): PatientNumber {
    return this.patientNumber;
  }

  getPatientName(): PatientName {
    return this.patientName;
  }
}
