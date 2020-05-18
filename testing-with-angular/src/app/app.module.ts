import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleUserComponent } from './screens/sample-user/sample-user.component';
import { DoctorsComponent } from './screens/basic-unit-tests/doctors/doctors.component';
import { HospitalComponent } from './screens/integration-testing/hospital/hospital.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleUserComponent,
    DoctorsComponent,
    HospitalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
