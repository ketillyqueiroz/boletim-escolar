import { Routes } from '@angular/router';
import { ReportCardComponent } from './components/report-card/report-card.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentsComponent } from './components/students/students.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'boletim', component: ReportCardComponent },
  { path: 'students', component: StudentsComponent },
];
