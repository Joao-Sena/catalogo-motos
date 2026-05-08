import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MotoFormModal } from './moto-form-modal';

describe('MotoFormModal', () => {
  let component: MotoFormModal;
  let fixture: ComponentFixture<MotoFormModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotoFormModal]
    }).compileComponents();

    fixture = TestBed.createComponent(MotoFormModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with empty values', () => {
    expect(component.formMoto.value).toEqual({
      imageUrl: '',
      model: '',
      price: '',
      year: null
    });
  });

  it('should have invalid form initially', () => {
    expect(component.isFormValid).toBeFalse();
  });

  it('should validate form correctly', () => {
    component.formMoto.setValue({
      imageUrl: 'http://example.com/image.jpg',
      model: 'Honda CBR',
      price: '15000',
      year: 2023
    });
    expect(component.isFormValid).toBeTrue();
  });

  it('should not submit invalid form', () => {
    spyOn(component.confirm, 'emit');
    component.submitForm();
    expect(component.confirm.emit).not.toHaveBeenCalled();
  });

  it('should submit valid form and reset', () => {
    spyOn(component.confirm, 'emit');
    component.formMoto.setValue({
      imageUrl: 'http://example.com/image.jpg',
      model: 'Honda CBR',
      price: '15000',
      year: 2023
    });
    component.submitForm();
    expect(component.confirm.emit).toHaveBeenCalledWith({
      imageUrl: 'http://example.com/image.jpg',
      model: 'Honda CBR',
      price: '15000',
      year: 2023
    });
    expect(component.formMoto.value).toEqual({
      imageUrl: null,
      model: null,
      price: null,
      year: null
    });
  });

  it('should emit close on backdrop click', () => {
    spyOn(component.close, 'emit');
    const backdrop = fixture.debugElement.query(By.css('.modal-backdrop'));
    backdrop.nativeElement.click();
    expect(component.close.emit).toHaveBeenCalled();
  });
});
