import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotoFormModal } from '../moto-form-modal/moto-form-modal';
import { MotoFormData } from '../../shared/interfaces/moto-form-data';
import { initialMotos } from '../../shared/mocks/motos.mock';
import { CurrencyPrefixPipe } from '../../shared/pipes/currency-prefix.pipe';
import { FooterComponent } from '../../shared/components/footer/footer';
import { HeaderComponent } from '../../shared/components/header/header';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, MotoFormModal, CurrencyPrefixPipe, FooterComponent, HeaderComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class HomeComponent {

  public subtitle: string = 'Confira as motos disponíveis';
  public isModalOpen = false;

  public newMotos: MotoFormData[] = [...initialMotos];

  public openModal(): void {
    this.isModalOpen = true;
  }

  public closeModal(): void {
    this.isModalOpen = false;
  }

  protected handleConfirm(data: MotoFormData): void {
    this.newMotos.push(data);
    this.closeModal();
  }

  protected deleteMoto(index: number): void {
    this.newMotos.splice(index, 1);
  }

}
