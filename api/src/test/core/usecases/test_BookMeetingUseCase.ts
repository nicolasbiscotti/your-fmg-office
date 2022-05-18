import { assert } from "chai";
import BookMeetingRequest from "../../../main/core/usecases/book-meeting/BookMeetingRequest";
import BookMeetingUseCase from "../../../main/core/usecases/book-meeting/BookMeetingUseCase";
import FakeMeetingRepository from "../../../main/infra/fake/meetings/FakeMeetingRepository";

describe("BookMeetingUseCase", () => {
  let repository: FakeMeetingRepository;
  let useCase: BookMeetingUseCase;

  beforeEach(() => {
    repository = new FakeMeetingRepository();
    useCase = new BookMeetingUseCase(repository);
  });

  describe("GIVEN an empty repository of meetings", () => {
    describe("WHEN a user try book a meeting with a valid request", () => {
      it("THEN should succefully book a new meeting", () => {
        // arrange
        const request = new BookMeetingRequest(
          "16-05-2022",
          "16:45",
          "02ls45",
          "58po78",
          "002"
        );
        const expected = "002";

        // act
        useCase.handle(request);
        const actual = repository.find("002").meetNumber;

        // assert
        assert.deepEqual(actual, expected);
      });
    });
  });
});
