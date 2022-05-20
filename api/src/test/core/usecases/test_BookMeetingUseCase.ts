import { assert } from "chai";
import BookMeetingRequestBuilder from "../../../main/core/builders/requests/BookMeetingRequestBuilder";
import MeetingRepository from "../../../main/core/domain/meetings/MeetingRepository";
import BookMeetingUseCase from "../../../main/core/usecases/book-meeting/BookMeetingUseCase";
import FakeMeetingRepository from "../../../main/infra/fake/meetings/FakeMeetingRepository";

describe("BookMeetingUseCaseTest", () => {
  let repository: MeetingRepository;
  let useCase: BookMeetingUseCase;

  beforeEach(() => {
    repository = new FakeMeetingRepository();
    useCase = new BookMeetingUseCase(repository);
  });

  describe("GIVEN an empty repository of meetings", () => {
    describe("WHEN a user try book a meeting with a valid request", () => {
      it("THEN should succefully book a new meeting", () => {
        // arrange
        const request = BookMeetingRequestBuilder.builder()
          .meetNumber("002")
          .build();
        
      });
    });
  });
});
