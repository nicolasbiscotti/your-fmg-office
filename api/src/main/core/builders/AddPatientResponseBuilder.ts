import AddPatientResponse from "../usecases/add-patient/AddPatientResponse";

export default class AddPatientResponseBuilder {
  private static readonly DEFAULT_PATIENT_NUMBER = "02dfggdf02saasdfv";

  static builder(): AddPatientResponseBuilder {
    return new AddPatientResponseBuilder();
  }

  private readonly response: AddPatientResponse;

  constructor() {
    this.response = {
      patientNumber: AddPatientResponseBuilder.DEFAULT_PATIENT_NUMBER,
    };
  }

  patientNumber(patientNumber: string): AddPatientResponseBuilder {
    this.response.patientNumber = patientNumber;
    return this;
  }

  build(): AddPatientResponse {
    return this.response;
  }
}
