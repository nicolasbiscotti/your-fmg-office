import UseCase from "../../../main/core/usecases/UseCase";
import UseCaseVerify from "./verifies/UseCaseVerify";

export function verifyThatUseCase<Req, Res>(
  useCase: UseCase<Req, Res>
): UseCaseVerify<Req, Res> {
  return new UseCaseVerify(useCase);
}
