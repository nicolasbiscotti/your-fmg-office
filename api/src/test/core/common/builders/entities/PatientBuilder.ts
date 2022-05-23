import Patient from "../../../../../main/core/domain/patients/Patient";
import PatientBirth from "../../../../../main/core/domain/patients/PatientBirth";
import PatientName from "../../../../../main/core/domain/patients/PatientName";
import PatientNumber from "../../../../../main/core/domain/patients/PatientNumber";

export default class PatientBuilder {
  private readonly patient;

  constructor() {
    this.patient = {
      patientNumber: "GB10BARC20040184197751",
      firstName: "Nicolás",
      lastName: "Biscotti",
      dateOfBirth: "1985-05-16",
      email: "nicolas.biscotti@gmail.com",
    };
  }

  static aPatient(): PatientBuilder {
    return new PatientBuilder();
  }

  patientNumber(patientNumber: string): PatientBuilder {
    this.patient.patientNumber = patientNumber;
    return this;
  }

  firstName(firstName: string): PatientBuilder {
    this.patient.firstName = firstName;
    return this;
  }

  lastName(lastName: string): PatientBuilder {
    this.patient.lastName = lastName;
    return this;
  }

  dateOfBirth(dateOfBirth: string): PatientBuilder {
    this.patient.dateOfBirth = dateOfBirth;
    return this;
  }

  email(email: string): PatientBuilder {
    this.patient.email = email;
    return this;
  }

  build(): Patient {
    const patientNumber = PatientNumber.of(this.patient.patientNumber);
    const patientName = PatientName.of(
      this.patient.firstName,
      this.patient.lastName
    );
    const patientBirth = PatientBirth.of(this.patient.dateOfBirth);
    return new Patient(patientNumber, patientName, patientBirth);
  }
}
