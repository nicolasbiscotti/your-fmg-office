export default interface VoidUseCase<Req> {
  handle: (request: Req) => void;
}
