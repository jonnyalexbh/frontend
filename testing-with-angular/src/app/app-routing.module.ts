import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleUserComponent } from './screens/sample-user/sample-user.component';

const routes: Routes = [
  {
    path: 'sample-user',
    component: SampleUserComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
