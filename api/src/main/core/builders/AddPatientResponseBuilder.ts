import AddPatientResponse from "../usecases/add-patient/AddPatientResponse";

export function anAddPatientResponse(): AddPatientResponseBuilder {
  return new AddPatientResponseBuilder();
}

export default class AddPatientResponseBuilder {
  private static readonly DEFAULT_PATIENT_NUMBER = "02dfggdf02saasdfv";
  private static readonly DEFAULT_PATIENT_NAME = "Manuel Biscotti";

  private readonly response: AddPatientResponse;

  constructor() {
    this.response = {
      patientNumber: AddPatientResponseBuilder.DEFAULT_PATIENT_NUMBER,
      patientName: AddPatientResponseBuilder.DEFAULT_PATIENT_NAME,
    };
  }

  static builder(): AddPatientResponseBuilder {
    return new AddPatientResponseBuilder();
  }

  patientNumber(patientNumber: string): AddPatientResponseBuilder {
    this.response.patientNumber = patientNumber;
    return this;
  }

  patientName(patientName: string): AddPatientResponseBuilder {
    this.response.patientName = patientName;
    return this;
  }

  build(): AddPatientResponse {
    return this.response;
  }
}
