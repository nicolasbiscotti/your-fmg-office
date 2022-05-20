import PatientBirth from "./PatientBirth";
import PatientName from "./PatientName";
import PatientNumber from "./PatientNumber";

export default class Patient {
  private patientNumber: PatientNumber;
  private patientName: PatientName;
  private patientBirth: PatientBirth;

  constructor(patientNumber: PatientNumber, patientName: PatientName, patientBirth: PatientBirth) {
    this.patientNumber = patientNumber;
    this.patientName = patientName;
    this.patientBirth = patientBirth;
  }

  static of(other: Patient): Patient {
    return new Patient(other.getPatientNumber(), other.getPatientName(), other.getPatientBirth());
  }

  getPatientNumber(): PatientNumber {
    return this.patientNumber;
  }

  getPatientName(): PatientName {
    return this.patientName;
  }

  getPatientBirth(): PatientBirth {
    return this.patientBirth;
  }
}
