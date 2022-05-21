import { AddPatientRequestBuilder } from "../../../../../main/core/builders/AddPatientRequestBuilder";

export function anAddPatientRequest(): AddPatientRequestBuilder {
  return new AddPatientRequestBuilder();
}
