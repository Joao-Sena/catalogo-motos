import { ComponentFixture, TestBed } from '@angular/core/testing';
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
});
