import PatientRepository from "../../../main/core/domain/patients/PatientRepository";
import UseCase from "../../../main/core/usecases/UseCase";
import PatientRepositoryVerify from "./verifies/PatientRepositoryVerify";
import UseCaseVerify from "./verifies/UseCaseVerify";

export function verifyThatUseCase<Req, Res>(
  useCase: UseCase<Req, Res>
): UseCaseVerify<Req, Res> {
  return new UseCaseVerify(useCase);
}

export function verifyThatRepository(
  repository: PatientRepository
): PatientRepositoryVerify {
  return new PatientRepositoryVerify(repository);
}
