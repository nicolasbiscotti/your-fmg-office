import PatientRepository from "../../../../../main/app/core/domain/patients/PatientRepository";
import PatientBuilder from "../builders/entities/PatientBuilder";

export default class PatientRepositoryGiven {
  private repository: PatientRepository;

  constructor(repository: PatientRepository) {
    this.repository = repository;
  }

  alreadyHasPatient(patientNumber: string): void {
    const patient = PatientBuilder.aPatient()
      .patientNumber(patientNumber)
      .build();
    this.repository.add(patient);
  }
}
