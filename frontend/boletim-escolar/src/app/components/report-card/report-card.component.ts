import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-report-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './report-card.component.html',
  styleUrl: './report-card.component.scss',
})
export class ReportCardComponent {
  inputValue: number | null = null;
  inputText: string = '';
  errorMessage: string = '';
  n1: number = 0;
  n2: number = 0;
  n3: number = 0;
  n4: number = 0;
  synthesis: number = 0;
  resultMessage: string = '';

  subjects: {
    name: string;
    id: number;
    n1: number;
    n2: number;
    n3: number;
    n4: number;
    synthesis: number;
    resultMessage: string;
  }[] = [
    {
      id: 0,
      name: 'PORTUGUÊS',
      n1: 0,
      n2: 0,
      n3: 0,
      n4: 0,
      synthesis: 0,
      resultMessage: '',
    },
    {
      id: 1,
      name: 'PRODUÇÃO',
      n1: 0,
      n2: 0,
      n3: 0,
      n4: 0,
      synthesis: 0,
      resultMessage: '',
    },
    {
      id: 2,
      name: 'INGLÊS',
      n1: 0,
      n2: 0,
      n3: 0,
      n4: 0,
      synthesis: 0,
      resultMessage: '',
    },
    {
      id: 3,
      name: 'ESPANHOL',
      n1: 0,
      n2: 0,
      n3: 0,
      n4: 0,
      synthesis: 0,
      resultMessage: '',
    },
    {
      id: 4,
      name: 'ARTES',
      n1: 0,
      n2: 0,
      n3: 0,
      n4: 0,
      synthesis: 0,
      resultMessage: '',
    },
    {
      id: 5,
      name: 'HISTÓRIA',
      n1: 0,
      n2: 0,
      n3: 0,
      n4: 0,
      synthesis: 0,
      resultMessage: '',
    },
    {
      id: 6,
      name: 'GEOGRAFIA',
      n1: 0,
      n2: 0,
      n3: 0,
      n4: 0,
      synthesis: 0,
      resultMessage: '',
    },
    {
      id: 7,
      name: 'FILOSOFIA',
      n1: 0,
      n2: 0,
      n3: 0,
      n4: 0,
      synthesis: 0,
      resultMessage: '',
    },
    {
      id: 8,
      name: 'MATEMÁTICA',
      n1: 0,
      n2: 0,
      n3: 0,
      n4: 0,
      synthesis: 0,
      resultMessage: '',
    },
    {
      id: 9,
      name: 'CIÊNCIAS',
      n1: 0,
      n2: 0,
      n3: 0,
      n4: 0,
      synthesis: 0,
      resultMessage: '',
    },
    {
      id: 10,
      name: 'ED. FÍSICA',
      n1: 0,
      n2: 0,
      n3: 0,
      n4: 0,
      synthesis: 0,
      resultMessage: '',
    },
  ];

  limitInputText(event: Event): void {
    const input = event.target as HTMLInputElement;
    let text = input.value.replace(/[^a-zA-Z\u00C0-\u00FF\s]/g, '');
    text = text.slice(0, 40);
    input.value = text;
    this.inputText = text;
    this.inputText = text.trim();
  }

  constructor(private cdr: ChangeDetectorRef) {}

  limitInputLength(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/[^0-9]/g, '');
    input.value = input.value.slice(0, 4);
    this.inputValue = input.value ? parseInt(value, 10) : null;
    this.validateInputYear();
  }

  validateInputYear(): void {
    if (!this.inputValue) {
      this.errorMessage = '';
    } else if (this.inputValue.toString().length < 4) {
      this.errorMessage = 'O ano deve conter 4 dígitos.';
    } else {
      this.errorMessage = '';
    }
    this.cdr.detectChanges();
  }

  limitInputMedia(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(',', '.').replace(/[^0-9.]/g, '');
    if (value.length > 10) {
      value = value.slice(0, 10);
    }
    const regex = /^(10(\.0+)?|[0-9](\.\d+)?)$/;
    this.synthesis = regex.test(value) ? parseFloat(value) : 0;
    if (regex.test(value)) {
      input.value = value;
    }
  }

  addValue(subject: any): void {
    const n1 = Number(subject.n1) || 0;
    const n2 = Number(subject.n2) || 0;
    const n3 = Number(subject.n3) || 0;
    const n4 = Number(subject.n4) || 0;

    if (
      n1 < 0 ||
      n1 > 10 ||
      n2 < 0 ||
      n2 > 10 ||
      n3 < 0 ||
      n3 > 10 ||
      n4 < 0 ||
      n4 > 10
    ) {
      subject.synthesis = 0;
    } else {
      subject.resultMessage = '';
      subject.synthesis = (n1 + n2 + n3 + n4) / 4;
      console.log(`Síntese de ${subject.name}: ${subject.synthesis}`);
    }
  }

  calculateAll(): void {
    this.subjects.forEach((subject) => {
      this.addValue(subject);
      if (subject.synthesis >= 7) {
        subject.resultMessage = 'Aprovado';
      } else if (subject.synthesis >= 5) {
        subject.resultMessage = 'Recuperação';
      } else {
        subject.resultMessage = 'Reprovado';
      }
    });
  }
}
