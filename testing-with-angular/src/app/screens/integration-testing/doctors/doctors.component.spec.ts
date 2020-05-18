import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { DoctorsComponent } from './doctors.component';
import { DoctorService } from './doctor.service';

describe('DoctorsComponent integration testing', () => {
  let component: DoctorsComponent;
  let fixture: ComponentFixture<DoctorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorsComponent],
      imports: [
        HttpClientModule
      ],
      providers: [DoctorService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('component should be created correctly', () => {
    expect(component).toBeTruthy();
  });

  it('should return the name of the doctor', () => {
    const name = 'Juan Bedoya';
    const res = component.greetDoctor(name);
    expect(res).toContain(name);
  });
});
