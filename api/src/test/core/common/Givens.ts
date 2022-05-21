import PatientRepository from "../../../main/core/domain/patients/PatientRepository";
import FakePatientNumberGenerator from "../../../main/infra/fake/patients/FakePatientNumberGenerator";
import FakePatientNumberGeneratorGiven from "./givens/FakePatientNumberGeneratorGiven";
import PatientRepositoryGiven from "./givens/PatientRepositoryGiven";

export function givenThatRepository(
  repository: PatientRepository
): PatientRepositoryGiven {
  return new PatientRepositoryGiven(repository);
}

export function givenThatGenerator(
  generator: FakePatientNumberGenerator
): FakePatientNumberGeneratorGiven {
  return new FakePatientNumberGeneratorGiven(generator);
}
