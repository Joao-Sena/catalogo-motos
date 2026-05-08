import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MotoFormData } from '../../shared/interfaces/moto-form-data';

@Component({
  standalone: true,
  selector: 'moto-form-modal',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './moto-form-modal.html',
  styleUrls: ['./moto-form-modal.scss']
})
export class MotoFormModal {
  @Output() close = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<MotoFormData>();

  formMoto = new FormGroup({
    imageUrl: new FormControl<string>('', Validators.required),
    model: new FormControl<string>('', Validators.required),
    price: new FormControl<string>('', Validators.required),
    year: new FormControl<number | null>(null, [Validators.required, Validators.max(2026)])
  });

  get isFormValid(): boolean {
    return this.formMoto.valid;
  }

  submitForm(): void {
    if (this.formMoto.invalid) {
      return;
    }

    this.confirm.emit(this.formMoto.value as MotoFormData);
    this.formMoto.reset();
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.close.emit();
    }
  }
}
