import BookMeetingRequest from "../../usecases/book-meeting/BookMeetingRequest";

class BookMeetingRequestBuilder {
  private readonly request: BookMeetingRequest;

  constructor() {
    this.request = {
      meetDate: "25-08-2022",
      meetTime: "16:45",
      patientNumber: "2DS54RET78TRE",
      meetNumber: "QW4578ERTYG54DS5HYHJ",
    };
  }

  static builder(): BookMeetingRequestBuilder {
    return new BookMeetingRequestBuilder();
  }

  meetDate(meetDate: string): BookMeetingRequestBuilder {
    this.request.meetDate = meetDate;
    return this;
  }

  meetTime(meetTime: string): BookMeetingRequestBuilder {
    this.request.meetTime = meetTime;
    return this;
  }

  patientNumber(patientNumber: string): BookMeetingRequestBuilder {
    this.request.patientNumber = patientNumber;
    return this;
  }

  meetNumber(meetNumber: string): BookMeetingRequestBuilder {
    this.request.meetNumber = meetNumber;
    return this;
  }

  build(): BookMeetingRequest {
    return this.request;
  }
}

export default BookMeetingRequestBuilder;
