import PatientNumber from "../../../core/domain/patients/PatientNumber";
import PatientNumberGenerator from "../../../core/domain/patients/PatientNumberGenerator";
import BaseFakeGenerator from "../base/BaseFakeGenerator";

class FakePatientNumberGenerator
  extends BaseFakeGenerator<PatientNumber>
  implements PatientNumberGenerator {}

export default FakePatientNumberGenerator;
