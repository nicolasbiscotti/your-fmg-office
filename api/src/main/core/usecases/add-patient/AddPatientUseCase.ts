import AddPatientResponseBuilder from "../../builders/AddPatientResponseBuilder";
import Patient from "../../domain/patients/Patient";
import PatientName from "../../domain/patients/PatientName";
import PatientNumberGenerator from "../../domain/patients/PatientNumberGenerator";
import PatientRepository from "../../domain/patients/PatientRepository";
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
    const patient = this.createPatient(patientName);
    this.patientRepository.add(patient);
    return this.getResponse(patient);
  }

  getPatientName(request: AddPatientRequest): PatientName {
    return PatientName.of(request.firstName, request.lastName);
  }

  createPatient(patientName: PatientName) {
    const patientNumber = this.patientNumberGenerator.next();
    return new Patient(patientNumber, patientName);
  }

  getResponse(patient: Patient) {
    const patientNumber = patient.getPatientNumber().toString();
    return AddPatientResponseBuilder.builder()
      .patientNumber(patientNumber)
      .build();
  }
}

export default AddPatientUseCase;
