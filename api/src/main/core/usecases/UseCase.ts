export default interface UseCase<Req, Res> {
  handle: (request: Req) => Res;
}
