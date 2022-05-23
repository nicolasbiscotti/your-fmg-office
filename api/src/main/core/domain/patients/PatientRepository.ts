import Optional from "../../../util/Optional";
import Patient from "./Patient";
import PatientNumber from "./PatientNumber";

export default interface PatientRepository {
  find: (patientNumber: PatientNumber) => Optional<Patient>;
  add: (patient: Patient) => void;
  update: (patient: Patient) => void;
}
