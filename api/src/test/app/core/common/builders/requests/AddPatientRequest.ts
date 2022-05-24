import { AddPatientRequestBuilder } from "../../../../../../main/app/core/builders/AddPatientRequestBuilder";

export function anAddPatientRequest(): AddPatientRequestBuilder {
  return new AddPatientRequestBuilder();
}
