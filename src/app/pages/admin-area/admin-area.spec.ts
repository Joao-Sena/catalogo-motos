import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AdminAreaComponent } from './admin-area';
import { FooterComponent } from '../../shared/components/footer/footer';
import { HeaderComponent } from '../../shared/components/header/header';

describe('AdminAreaComponent', () => {
  let component: AdminAreaComponent;
  let fixture: ComponentFixture<AdminAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAreaComponent, HeaderComponent, FooterComponent, RouterTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdminAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
