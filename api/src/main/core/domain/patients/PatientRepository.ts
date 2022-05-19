import Patient from "./Patient";
import PatientNumber from "./PatientNumber";

export default interface PatientRepository {
  find: (patientNumber: PatientNumber) => Patient;
  add: (patient: Patient) => void;
  update: (patient: Patient) => void;
}
