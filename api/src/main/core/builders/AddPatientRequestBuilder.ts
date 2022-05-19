import AddPatientRequest from "../usecases/add-patient/AddPatientRequest";

export class AddPatientRequestBuilder {
  private static readonly DEFAULT_FIRSTNAME = "Nicolás";
  private static readonly DEFAULT_LASTNAME = "Biscotti";
  private static readonly DEFAULT_DATE_OF_BIRTH = "16-05-1985";
  private static readonly DEFAULT_EMAIL = "nicolas.biscotti@gmail.com";

  static builder(): AddPatientRequestBuilder {
    return new AddPatientRequestBuilder();
  }

  private readonly request: AddPatientRequest;

  constructor() {
    this.request = {
      firstName: AddPatientRequestBuilder.DEFAULT_FIRSTNAME,
      lastName: AddPatientRequestBuilder.DEFAULT_LASTNAME,
      dateOfBirth: AddPatientRequestBuilder.DEFAULT_DATE_OF_BIRTH,
      email: AddPatientRequestBuilder.DEFAULT_EMAIL,
    };
  }

  firstName(firstName: string): AddPatientRequestBuilder {
    this.request.firstName = firstName;
    return this;
  }

  lastName(lastName: string): AddPatientRequestBuilder {
    this.request.lastName = lastName;
    return this;
  }

  dateOfBirth(dateOfBirth: string): AddPatientRequestBuilder {
    this.request.dateOfBirth = dateOfBirth;
    return this;
  }

  email(email: string): AddPatientRequestBuilder {
    this.request.email = email;
    return this;
  }

  build(): AddPatientRequest {
    return this.request;
  }
}
