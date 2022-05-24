import { assert } from "chai";
import UseCase from "../../../../../main/app/core/usecases/UseCase";

export default class UseCaseRequestVerify<Req, Res> {
  private useCase: UseCase<Req, Res>;

  private request: Req;

  constructor(useCase: UseCase<Req, Res>, request: Req) {
    this.useCase = useCase;
    this.request = request;
  }

  shouldReturnReponse(expectedResponse: Res) {
    const response = this.useCase.handle(this.request);
    assert.deepEqual(response, expectedResponse);
  }

  shouldThrowValidationException(message: string) {
    assert.Throw(() => this.useCase.handle(this.request), message);
  }
}
