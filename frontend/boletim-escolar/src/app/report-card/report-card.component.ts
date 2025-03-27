import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-report-card',
  imports: [CommonModule],
  templateUrl: './report-card.component.html',
  styleUrl: './report-card.component.scss'
})
export class ReportCardComponent {
  inputValue: number | null = null;
  errorMessage: string = '';

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
 
  constructor(private cdr: ChangeDetectorRef) {}

  limitInputLength(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/[^0-9]/g, '');
    input.value = input.value.slice(0, 4);
    this.inputValue = input.value ? parseInt(value, 10) : null;
    this.validateInput();
  };

  validateInput(): void {
    if (!this.inputValue) {
      this.errorMessage = '';
    } else if (this.inputValue.toString().length < 4) {
      this.errorMessage = 'O ano deve conter 4 dígitos.';
    } else {
      this.errorMessage = '';
    }
    this.cdr.detectChanges();
  }
}
