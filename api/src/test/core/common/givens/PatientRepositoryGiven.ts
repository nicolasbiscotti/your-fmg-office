import PatientRepository from "../../../../main/core/domain/patients/PatientRepository";
import PatientBuilder from "../builders/entities/PatientBuilder";

export default class PatientRepositoryGiven {
  private repository: PatientRepository;

  constructor(repository: PatientRepository) {
    this.repository = repository;
  }

  alreadyHasPatient(patientNumber: string): void {
    const patient = PatientBuilder.builder()
      .patientNumber(patientNumber)
      .build();
    this.repository.add(patient);
  }
}
