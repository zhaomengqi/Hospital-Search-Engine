package testing;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.Test;

import com.qpidhealth.qpid.search.services.PatientService;
import com.qpidhealth.qpid.search.services.PatientService.Patient;

public class urlTest {

	@Test
	public void test() {
		PatientService test = new PatientService();
		List<Patient> result1=test.searchPatients("Patient Note");
		List<Patient> result2=test.searchPatients("Clinical Note");
		List<Patient> result3=test.searchPatients("Summary");
		List<Patient> result4=test.searchPatients("Mary TestPerson");
		List<Patient> result5=test.searchPatients("Joe TestPerson");
		List<Patient> result6=test.searchPatients("Sam TestPerson");
		
		}

}
