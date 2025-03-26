import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-report-card',
  imports: [CommonModule],
  templateUrl: './report-card.component.html',
  styleUrl: './report-card.component.scss'
})
export class ReportCardComponent {

  subjects: { name: string, id: number }[] = [
    {
      id: 0,
      name: 'PORTUGUÊS'
    },
    {
      id: 1,
      name: 'PRODUÇÃO'
    },
    {
      id: 2,
      name: 'INGLÊS'
    },
    {
      id: 3,
      name: "ESPANHOL"
    },
    {
      id: 4,
      name: "ARTES"
    },
    {
      id: 5,
      name: "HISTÓRIA"
    },
    {
      id: 6,
      name: "GEOGRAFIA"
    },
    {
      id: 7,
      name: "FILOSOFIA"
    },
    {
      id: 8,
      name: "MATEMÁTICA"
    },
    {
      id: 9,
      name: "CIÊNCIAS"
    },
    {
      id: 10,
      name: "ED. FÍSICA"
    },
  ];
}
