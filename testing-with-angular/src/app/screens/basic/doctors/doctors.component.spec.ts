import { throwError, from } from 'rxjs';
import { DoctorsComponent } from './doctors.component';
import { DoctorsService } from './doctors.service';

describe('DoctorsComponent', () => {
  let component: DoctorsComponent;
  const service = new DoctorsService(null);

  beforeEach(() => {
    component = new DoctorsComponent(service);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('init: should load doctors', () => {
    const doctors = ['doctor1', 'doctor2', 'doctor3'];
    spyOn(service, 'getDoctors').and.callFake(() => {
      return from([doctors]);
    });
    component.ngOnInit();
    expect(component.doctors.length).toBeGreaterThan(0);
  });

  it('should call the service to add a doctor', () => {
    const addDoctorSpy = spyOn(service, 'addDoctor').and.callFake(doctor => {
      return from('empty');
    });
    component.aggregateDoctor();
    expect(addDoctorSpy).toHaveBeenCalled();
    expect(addDoctorSpy).toHaveBeenCalledTimes(1);
  });

  it('should add a new doctor to the array of doctors', () => {
    const doctor = { id: 1, name: 'Juan' };
    spyOn(service, 'addDoctor').and.returnValue(from([doctor]));
    component.aggregateDoctor();
    expect(component.doctors.indexOf(doctor)).toBeGreaterThanOrEqual(0);
    expect(component.doctors.length).toBe(1);
  });

  it('if the test fails it should return an error message', () => {
    const myError = 'could not add doctor';

    spyOn(service, 'addDoctor').and.returnValue(throwError(myError));
    component.aggregateDoctor();
    expect(component.messageError).toBe(myError);
  });

  it('should call the server to delete the doctor', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const deleteDoctorSpy = spyOn(service, 'deleteDoctor').and.returnValue(doctor => from('empty'));
    component.removeDoctor('1');
    expect(deleteDoctorSpy).toHaveBeenCalledWith('1');
  });
});
