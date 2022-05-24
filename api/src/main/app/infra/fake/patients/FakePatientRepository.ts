import RepositoryExecption from "../../../core/domain/exceptions/RepositoryException";
import RepositoryMessages from "../../../core/domain/exceptions/RepositoryMessages";
import Patient from "../../../core/domain/patients/Patient";
import PatientNumber from "../../../core/domain/patients/PatientNumber";
import PatientRepository from "../../../core/domain/patients/PatientRepository";
import Optional from "../../../util/Optional";

export default class FakePatientRepository implements PatientRepository {
  private readonly repository: Map<string, Patient>;

  constructor() {
    this.repository = new Map();
  }

  find = (patientNumber: PatientNumber): Optional<Patient> => {
    const patient = this.repository.get(patientNumber.toString());

    if (patient) {
      const clonedPatient = Patient.of(patient);
      return Optional.of(clonedPatient);
    }

    return Optional.empty();
  };

  add = (patient: Patient): void => {
    const patientNumber = patient.getPatientNumber();
    const clonedPatient = Patient.of(patient);

    if (this.contains(patientNumber.toString())) {
      throw new RepositoryExecption(
        RepositoryMessages.REPOSITORY_CONSTRAINT_VIOLATION
      );
    } else {
      this.repository.set(patientNumber.toString(), clonedPatient);
    }
  };

  update = (patient: Patient): void => {
    const patientNumber = patient.getPatientNumber();

    if (this.contains(patientNumber.toString())) {
      const clonedPatient = Patient.of(patient);
      this.repository.set(patientNumber.toString(), clonedPatient);
    }

    throw new RepositoryExecption(
      RepositoryMessages.REPOSITORY_CANNOT_UPDATE_NON_EXISTENT
    );
  };

  contains = (number: string): boolean => this.repository.has(number);
}
