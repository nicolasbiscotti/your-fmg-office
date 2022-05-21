import PatientNumber from "../../../../main/core/domain/patients/PatientNumber";
import FakePatientNumberGenerator from "../../../../main/infra/fake/patients/FakePatientNumberGenerator";

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
