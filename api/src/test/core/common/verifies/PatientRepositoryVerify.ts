import { assert } from "chai";
import Patient from "../../../../main/core/domain/patients/Patient";
import PatientNumber from "../../../../main/core/domain/patients/PatientNumber";
import PatientRepository from "../../../../main/core/domain/patients/PatientRepository";
import Optional from "../../../../main/util/Optional";
import PatientBuilder from "../builders/entities/PatientBuilder";

interface PatientData {
  firstName: string;
  lastName: string;
  fullName: string;
  dateOfBirth: string;
  generatedPatientNumber: string;
}

export default class PatientRepositoryVerify {
  private repository: PatientRepository;

  constructor(repository: PatientRepository) {
    this.repository = repository;
  }

  contain(patient: Patient): Patient {
    const retrievedPatient = this.repository.find(patient.getPatientNumber());
    assert.deepEqual(retrievedPatient, Optional.of(patient));
    return retrievedPatient.get();
  }

  shouldContain(patientData: PatientData): Patient {
    const patient = PatientBuilder.aPatient()
      .patientNumber(patientData.generatedPatientNumber)
      .firstName(patientData.firstName)
      .lastName(patientData.lastName)
      .dateOfBirth(patientData.dateOfBirth)
      .build();
    return this.contain(patient);
  }

  shouldNotContain(patientNumber: string): void {
    const retrievedPatient = this.repository.find(
      PatientNumber.of(patientNumber)
    );
    assert.isFalse(retrievedPatient.isPresent());
  }
}
