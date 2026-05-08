import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header';
import { FooterComponent } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-admin-area',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './admin-area.html',
  styleUrl: './admin-area.scss',
})
export class AdminAreaComponent {

}
