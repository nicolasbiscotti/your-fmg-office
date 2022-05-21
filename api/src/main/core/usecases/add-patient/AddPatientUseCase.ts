import AddPatientResponseBuilder from "../../builders/AddPatientResponseBuilder";
import Patient from "../../domain/patients/Patient";
import PatientBirth from "../../domain/patients/PatientBirth";
import PatientName from "../../domain/patients/PatientName";
import PatientNumberGenerator from "../../domain/patients/PatientNumberGenerator";
import PatientRepository from "../../domain/patients/PatientRepository";
import UseCase from "../UseCase";
import AddPatientRequest from "./AddPatientRequest";
import AddPatientResponse from "./AddPatientResponse";

class AddPatientUseCase
  implements UseCase<AddPatientRequest, AddPatientResponse>
{
  patientNumberGenerator: PatientNumberGenerator;
  patientRepository: PatientRepository;

  constructor(
    patientNumberGenerator: PatientNumberGenerator,
    patientRepository: PatientRepository
  ) {
    this.patientNumberGenerator = patientNumberGenerator;
    this.patientRepository = patientRepository;
  }

  handle(request: AddPatientRequest): AddPatientResponse {
    const patientName = this.getPatientName(request);
    const patientBirth = this.getPatientBirth(request);
    const patient = this.createPatient(patientName, patientBirth);
    this.patientRepository.add(patient);
    return this.getResponse(patient);
  }

  getPatientName(request: AddPatientRequest): PatientName {
    return PatientName.of(request.firstName, request.lastName);
  }

  getPatientBirth(request: AddPatientRequest): PatientBirth {
    return PatientBirth.of(request.dateOfBirth);
  }

  createPatient(patientName: PatientName, patientBirth: PatientBirth) {
    const patientNumber = this.patientNumberGenerator.next();
    return new Patient(patientNumber, patientName, patientBirth);
  }

  getResponse(patient: Patient) {
    const patientNumber = patient.getPatientNumber().toString();
    const patientName = patient.getPatientName().toString();
    return AddPatientResponseBuilder.builder()
      .patientNumber(patientNumber)
      .patientName(patientName)
      .build();
  }
}

export default AddPatientUseCase;
