import { anAddPatientResponse } from "../../../main/core/builders/AddPatientResponseBuilder";
import ValidationMessages from "../../../main/core/domain/exceptions/ValidationMessages";
import PatientRepository from "../../../main/core/domain/patients/PatientRepository";
import AddPatientUseCase from "../../../main/core/usecases/add-patient/AddPatientUseCase";
import FakePatientNumberGenerator from "../../../main/infra/fake/patients/FakePatientNumberGenerator";
import FakePatientRepository from "../../../main/infra/fake/patients/FakePatientRepository";
import { anAddPatientRequest } from "../common/builders/requests/AddPatientRequest";
import { givenThatGenerator } from "../common/Givens";
import {
  verifyThatRepository,
  verifyThatUseCase,
} from "../common/Verifications";

describe("AddPatientUseCaseTest", () => {
  let patientNumberGenerator: FakePatientNumberGenerator;
  let patientRepository: PatientRepository;
  let addPatientUseCase: AddPatientUseCase;

  const patientData = {
    firstName: "Nicolás",
    lastName: "Biscotti",
    fullName: "Nicolás Biscotti",
    dateOfBirth: "1985-05-16",
    generatedPatientNumber: "GB41OMQP68570038161775",
  };

  beforeEach(() => {
    patientNumberGenerator = new FakePatientNumberGenerator();
    patientRepository = new FakePatientRepository();
    addPatientUseCase = new AddPatientUseCase(
      patientNumberGenerator,
      patientRepository
    );
  });

  it("should add a patient given a valid request", () => {
    givenThatGenerator(patientNumberGenerator).willGenerate(
      patientData.generatedPatientNumber
    );

    const request = anAddPatientRequest()
      .firstName(patientData.firstName)
      .lastName(patientData.lastName)
      .dateOfBirth(patientData.dateOfBirth)
      .build();

    const expectedResponse = anAddPatientResponse()
      .patientNumber(patientData.generatedPatientNumber)
      .patientName(patientData.fullName)
      .build();

    verifyThatUseCase(addPatientUseCase)
      .withRequest(request)
      .shouldReturnReponse(expectedResponse);

    verifyThatRepository(patientRepository).shouldContain(patientData);
  });

  it("should throw an error given an empty first name", () => {
    for (const firstName of ["", "   "]) {
      const request = anAddPatientRequest().firstName(firstName).build();

      verifyThatUseCase(addPatientUseCase)
        .withRequest(request)
        .shouldThrowValidationException(ValidationMessages.FIRST_NAME_EMPTY);
    }
  });

  it("should throw an error given an empty last name", () => {
    for (const lastName of ["", "   "]) {
      const request = anAddPatientRequest().lastName(lastName).build();

      verifyThatUseCase(addPatientUseCase)
        .withRequest(request)
        .shouldThrowValidationException(ValidationMessages.LAST_NAME_EMPTY);
    }
  });
});
