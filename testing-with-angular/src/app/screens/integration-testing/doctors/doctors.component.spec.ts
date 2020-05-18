import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsComponent } from './doctors.component';

describe('DoctorsComponent integration testing', () => {
  let component: DoctorsComponent;
  let fixture: ComponentFixture<DoctorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorsComponent]
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
