import Patient from "../../../core/domain/patients/Patient";
import PatientNumber from "../../../core/domain/patients/PatientNumber";
import PatientRepository from "../../../core/domain/patients/PatientRepository";

export default class FakePatientRepository implements PatientRepository {
  private readonly repository: Map<PatientNumber, Patient>;

  constructor() {
    this.repository = new Map();
  }

  find = (patientNumber: PatientNumber) => {
    const patient = this.repository.get(patientNumber);
    if (patient) {
      const clonedPatient = Patient.of(patient);
      return clonedPatient;
    }
    throw new Error("No patient was found");
  };

  add = (patient: Patient) => {
    const patientNumber = patient.getPatientNumber();
    const clonedPatient = Patient.of(patient);

    if (!this.contains(patientNumber)) {
      this.repository.set(patientNumber, clonedPatient);
    }

    throw new Error("Repositori constraint violation");
  };
  update = (patient: Patient) => {
    const patientNumber = patient.getPatientNumber();

    if (this.contains(patientNumber)) {
      const clonedPatient = Patient.of(patient);
      this.repository.set(patientNumber, clonedPatient);
    }

    throw new Error("No patient was found to be update");
  };

  contains = (patientNumber: PatientNumber) =>
    this.repository.has(patientNumber);
}
