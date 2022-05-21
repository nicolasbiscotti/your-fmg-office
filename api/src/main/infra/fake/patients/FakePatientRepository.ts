import RepositoryExecption from "../../../core/domain/exceptions/RepositoryException";
import RepositoryMessages from "../../../core/domain/exceptions/RepositoryMessages";
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
    throw new RepositoryExecption(
      RepositoryMessages.REPOSITORY_DOES_NOT_CONTAIN_THE_REQUESTED
    );
  };

  add = (patient: Patient) => {
    const patientNumber = patient.getPatientNumber();
    const clonedPatient = Patient.of(patient);

    if (this.contains(patientNumber)) {
      throw new RepositoryExecption(
        RepositoryMessages.REPOSITORY_CONSTRAINT_VIOLATION
      );
    } else {
      this.repository.set(patientNumber, clonedPatient);
    }
  };
  
  update = (patient: Patient) => {
    const patientNumber = patient.getPatientNumber();

    if (this.contains(patientNumber)) {
      const clonedPatient = Patient.of(patient);
      this.repository.set(patientNumber, clonedPatient);
    }

    throw new RepositoryExecption(
      RepositoryMessages.REPOSITORY_CANNOT_UPDATE_NON_EXISTENT
    );
  };

  contains = (patientNumber: PatientNumber) =>
    this.repository.has(patientNumber);
}
