import PatientNumber from "../../../../../main/app/core/domain/patients/PatientNumber";
import FakePatientNumberGenerator from "../../../../../main/app/infra/fake/patients/FakePatientNumberGenerator";

export default class FakePatientNumberGeneratorGiven {
  private generator: FakePatientNumberGenerator;

  constructor(generator: FakePatientNumberGenerator) {
    this.generator = generator;
  }

  willGenerate(number: string): void {
    const patientNumber = PatientNumber.of(number);
    this.generator.add([patientNumber]);
  }
}
