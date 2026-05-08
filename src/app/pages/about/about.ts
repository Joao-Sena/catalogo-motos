import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/components/header/header';
import { FooterComponent } from '../../shared/components/footer/footer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent implements OnInit {

  namePerson: string = '';

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.namePerson = this.activeRoute.snapshot.paramMap.get('name') || '';
  }

}
