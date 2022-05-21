import UseCase from "../../../../main/core/usecases/UseCase";
import UseCaseRequestVerify from "./UseCaseRequestVerify";

export default class UseCaseVerify<Req, Res> {
  private useCase: UseCase<Req, Res>;

  constructor(useCase: UseCase<Req, Res>) {
    this.useCase = useCase;
  }

  withRequest(request: Req): UseCaseRequestVerify<Req, Res> {
    return new UseCaseRequestVerify(this.useCase, request);
  }
}
