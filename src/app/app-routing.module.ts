import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { FacultyComponent } from './faculty/faculty.component';


const routes: Routes = [
  { path: 'student-login', component: StudentComponent },
  { path: 'faculty-login', component: FacultyComponent },
  { path: '', redirectTo: '/student-login', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
