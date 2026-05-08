import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home';
import { MotoFormData } from '../../shared/interfaces/moto-form-data';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, RouterTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial motos', () => {
    expect(component.newMotos.length).toBeGreaterThan(0);
  });

  it('should open modal when button is clicked', () => {
    const button = fixture.debugElement.query(By.css('.btn-register'));
    button.nativeElement.click();
    expect(component.isModalOpen).toBeTrue();
  });

  it('should close modal when modal emits close event', () => {
    component.isModalOpen = true;
    fixture.detectChanges();
    const modal = fixture.debugElement.query(By.css('moto-form-modal'));
    if (modal) {
      modal.triggerEventHandler('close', null);
      expect(component.isModalOpen).toBeFalse();
    }
  });

  it('should add moto when modal emits confirm event', () => {
    component.isModalOpen = true;
    fixture.detectChanges();
    const initialLength = component.newMotos.length;
    const newMoto: MotoFormData = {
      model: 'Test Moto',
      price: '10000',
      year: 2023,
      imageUrl: 'test.jpg'
    };
    const modal = fixture.debugElement.query(By.css('moto-form-modal'));
    if (modal) {
      modal.triggerEventHandler('confirm', newMoto);
      expect(component.newMotos.length).toBe(initialLength + 1);
      expect(component.newMotos[component.newMotos.length - 1]).toEqual(newMoto);
    }
  });

  it('should delete moto when delete button is clicked', () => {
    const initialLength = component.newMotos.length;
    const deleteButton = fixture.debugElement.query(By.css('.card-delete'));
    deleteButton.nativeElement.click();
    expect(component.newMotos.length).toBe(initialLength - 1);
  });

  it('should render moto cards', () => {
    const motoCards = fixture.debugElement.queryAll(By.css('.moto-card'));
    expect(motoCards.length).toBe(component.newMotos.length);
  });

  it('should have subtitle', () => {
    const subtitleElement = fixture.debugElement.query(By.css('.subtitle'));
    expect(subtitleElement.nativeElement.textContent).toContain('Confira as motos disponíveis');
  });
});
