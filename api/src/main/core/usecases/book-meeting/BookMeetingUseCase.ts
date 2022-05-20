import MeetingRepository from "../../domain/meetings/MeetingRepository";
import { VoidUseCase } from "../VoidUseCase";
import BookMeetingRequest from "./BookMeetingRequest";

class BookMeetingUseCase implements VoidUseCase<BookMeetingRequest> {
  repository: MeetingRepository;

  constructor(repository: MeetingRepository) {
    this.repository = repository;
  }

  handle(request: BookMeetingRequest): void {
    
  }
}

export default BookMeetingUseCase;
